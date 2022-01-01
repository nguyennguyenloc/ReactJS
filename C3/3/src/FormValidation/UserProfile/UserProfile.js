import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            fontSize:
              'font-family:"Google Sans","Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className="w-50 bg-white p-5 m-5"
        >
          <h1 className="text-center mt-0 mb-5">User Profile</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="text" name="firstName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="lastName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="useName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>useName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="email" required />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="text" name="password" type="password" required />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="passwordConfirm"
                  type="password"
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passwordConfirm</label>
              </div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn text-white bg-dark w-100 col-12"
              style={{ fontSize: 25 }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
