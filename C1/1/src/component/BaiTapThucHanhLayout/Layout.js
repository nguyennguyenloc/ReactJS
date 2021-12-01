import React, { Component } from "react";
import Body from "./Body/Body";
import Footer from "./Footer";
import Header from "./Header";

export default class LayoutMainHome extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className=" col-12">
            <Body />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
