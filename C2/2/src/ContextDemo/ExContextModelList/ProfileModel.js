import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";

export default class ProfileModel extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <ExModelListContext.Consumer>
          {(value) => {
            let activeModel = value.modelListState.find(
              (model) => model.active === true
            );

            return (
              <div className="card text-left" style={{ width: 300 }}>
                <img
                  className="card-img-top"
                  src={activeModel.img}
                  alt={activeModel.img}
                />
                <div className="card-body">
                  <h4 className="card-title">Họ tên: {activeModel.name}</h4>
                  <p className="card-text">Tuổi: {activeModel.age}</p>
                  <p className="card-text">
                    Lượt thích: ({activeModel.like}){" "}
                    <i className="fa fa-heart text-danger"></i>
                  </p>
                </div>
              </div>
            );
          }}
        </ExModelListContext.Consumer>
      </div>
    );
  }
}
