import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";
import ModelItem from "./ModelItem";

export default class ModelList extends Component {
  render() {
    return (
      <div className="">
        <h3>Danh sách thần tượng</h3>
        <div className="row">
          <ExModelListContext.Consumer>
            {(value) => {
              return value.modelListState.map((model, index) => {
                return (
                  <div key={index} className="col-3">
                    <ModelItem ModelItem={model} />
                  </div>
                );
              });
            }}
          </ExModelListContext.Consumer>
        </div>
      </div>
    );
  }
}
