import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InstructorAppNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cheat Checker for Instructors</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/instructor/add" className="nav-link">Add a new Question</Link>
          </li>
          <li className="navbar-item">
          <Link to="/instructor/keywords" className="nav-link">Add Universal Keywords</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}