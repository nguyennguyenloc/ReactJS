import React, { Component } from "react";
import { ModelContext } from "../_Context/ModelContext";

export default class ModelStateProvider extends Component {
  state = { like: 1 };

  setLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };
  render() {
    return (
      <ModelContext.Provider
        value={{ stateLike: this.state.like, setLike: this.setLike }}
      >
        {/*phạm vi sư dụng context*/}
        {this.props.children}
      </ModelContext.Provider>
    );
  }
}
