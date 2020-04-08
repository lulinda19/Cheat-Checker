import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cheat Checker</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/student/login" className="nav-link">Student Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/student/create" className="nav-link">Create Student Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}