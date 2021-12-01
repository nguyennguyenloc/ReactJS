import React, { Component } from "react";
import Header from "../BaiTapThucHanhLayout/Header";

export default class DataBindingComponent extends Component {
  age = "24";

  student = {
    subject: "Math",
    city: "Vinh",
  };

  renderImage = () => {
    return (
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv9kM8Ger1unusFSSRslbwyRiFz6cl9fBsQ&usqp=CAU" />
    );
  };

  renderMultiComponent = () => {
    return <Header />;
  };
  renderMultiComponent;
  render() {
    let name = "Lộc";
    let address = {
      country: "Việt Nam",
    };
    return (
      <div>
        <h1>Họ tên: {name}</h1>
        <h1>Tuổi: {this.age}</h1>
        <h1>Binding Object</h1>
        <h1>
          Study {this.student.subject} at {this.student.city} in
          {address.country}
        </h1>
        <h3>Binding function</h3>
        {this.renderImage()}
        <hr />
        {this.renderMultiComponent()}
      </div>
    );
  }
}
