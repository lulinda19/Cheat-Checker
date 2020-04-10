import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StudentNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/student" className="navbar-brand">Cheat Checker for Students</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/student/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/student/create" className="nav-link">Create Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}