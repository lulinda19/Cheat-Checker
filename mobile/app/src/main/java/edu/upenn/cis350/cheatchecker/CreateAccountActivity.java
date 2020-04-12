package edu.upenn.cis350.cheatchecker;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class CreateAccountActivity extends AppCompatActivity {

    public static final int homeActivityId = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);
    }

    public void onCreateMyAccountButtonClick(View view) {
        Intent i = new Intent(this, HomeScreenActivity.class);

        final EditText emailBox = findViewById(R.id.enter_email);
        final EditText passwordBox = findViewById(R.id.edit_password);
        final EditText firstNameBox = findViewById(R.id.edit_firstName);
        final EditText lastNameBox = findViewById(R.id.edit_lastName);
        String email = emailBox.getText().toString();
        String password = passwordBox.getText().toString();
        String firstName = firstNameBox.getText().toString();
        String lastName = lastNameBox.getText().toString();

        //check for whether person is in database
        if (APICalls.createUser(firstName, lastName, email, password)){
            i.putExtra("Email", email);
            startActivityForResult(i, homeActivityId);
        }
    }
}
