import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required !";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

      if (!regexEmail.test(value)) {
        //nếu email không hợp lệ
        newErrors[name] = name + " is invalid !";
      } else {
        //nếu email hợp lệ
        newErrors[name] = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValue["password"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is valid";
      }
    }
    this.setState(
      { values: newValue, errors: newErrors }
      // ,
      // () => {
      //   console.log(this.state);
      // }
    );
  };
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
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>useName</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="text"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.password}
                  name="password"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>password</label>
                <span className="text text-danger">
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passwordConfirm}
                  name="passwordConfirm"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passwordConfirm</label>
                <span className="text text-danger">
                  {this.state.errors.passwordConfirm}
                </span>
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
