import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";

export default class ModelItem extends Component {
  render() {
    let { ModelItem } = this.props;
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return (
            <div className="card text-left bg-default text-dark">
              <img
                className="card-img-top"
                src={ModelItem.img}
                alt={ModelItem.img}
              />
              <div className="card-body">
                <h4 className="card-title">Họ tên:{ModelItem.name} </h4>
                <p className="card-text">Tuổi: {ModelItem.age}</p>
                <button
                  onClick={() => value.setActiveModel(ModelItem.id)}
                  style={{
                    background: "none",
                    border: "1px solide red",
                    borderRadius: "5px",
                  }}
                  className="card-text"
                >
                  Lượt thích: ({ModelItem.like})
                  <i className="fa fa-heart text-danger"></i>
                </button>
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
