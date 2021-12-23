import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class ModelProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-5">
              <h3>Profile </h3>
              <div className="card text-white bg-dark">
                <img
                  style={{ width: 250, height: 350 }}
                  className="card img-top"
                  src="https://fb-images.saostar.vn/wp700/pc/1637909829480/saostar-7nqf59ej2qt38rh2.jpeg"
                  alt="123"
                />
                <div className="card-body">
                  <h4 className="card-title">Name: Nanon</h4>
                  <p className="card-text">Age: 20</p>
                  <span style={{ color: "red" }}>
                    {value.stateLike}
                    <i className="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
