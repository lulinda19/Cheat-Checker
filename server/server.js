const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path:'.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const studentsRouter = require('./routes/students');
const instructorsRouter = require('./routes/instructors');
const coursesRouter = require('./routes/courses');

app.use('/students', studentsRouter);
app.use('/instructors', instructorsRouter);
app.use('/courses', coursesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});