import React, { Component } from "react";
import "./UserProfile.css";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
export default class UserProfile extends Component {
  // const Swal = require("sweetalert2");
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

  handleSubmit = (event) => {
    //cản trình duyệt submit reload lại trang
    event.preventDefault();
    //xét điều kiện khi submit
    let { values, errors } = this.state;
    //biến xác định form hợp lệ
    let valid = true;
    let profileContent = "";
    let errorsContent = "";
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        errorsContent += `<p class="text-left"><b class="text-danger">${key} is valid!</b></p>`;
      }
      profileContent += `<p class="text-left"><b>${key}:</b> ${values[key]}</p>`;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorsContent += `<p class="text-left"><b class="text-danger">${key} is valid!</b></p>`;
        valid = false;
      }
    }

    if (!valid) {
      // alert("Dữ liệu chưa hợp lệ");
      Swal.fire({
        title: "Your profile!",
        html: errorsContent,
        icon: "error", //success, error, warning, question
        confirmButtonText: "Cool",
      });
      return;
    }
    // alert("Thành công");
    Swal.fire({
      title: "Your profile!",
      html: profileContent,
      icon: "success", //success, error, warning, question
      confirmButtonText: "Cool",
    });
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
          onSubmit={this.handleSubmit}
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
