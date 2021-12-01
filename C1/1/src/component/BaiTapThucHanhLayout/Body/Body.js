import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid row ">
          <div className="col-12">
            <Banner />
          </div>
        </div>
        <div className="container-fluid row">
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
        </div>
      </div>
    );
  }
}
