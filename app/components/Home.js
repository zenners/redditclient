// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    const Form = props => (
      <form className="card-content">
        <label htmlFor="name">Email</label>
        <input type="email" id="name" placeholder="Enter your email" />
        <label htmlFor="name">Password</label>
        <input type="text" id="name" placeholder="Password" />
        <input type="submit" value="Submit" />
        <a>Register </a>
      </form>
    );
    return (
      <div className="vertical-center">
        <div className="card">
          <h1 className="text-center">Welcome! Please Login</h1>
          <Form />
        </div>
      </div>
    );
  }
}
