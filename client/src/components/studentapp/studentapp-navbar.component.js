import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StudentAppNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cheat Checker for Students</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/studentapp/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/studentapp/home" className="nav-link">Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/student/add" className="nav-link">Add a new Answer</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}