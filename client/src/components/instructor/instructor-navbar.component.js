import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InstructorNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cheat Checker for Instructors</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/instructor/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/instructor/create" className="nav-link">Create Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}