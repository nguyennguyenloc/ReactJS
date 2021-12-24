import React, { Component } from "react";
import { ExModelListContext } from "../_Context/ExModelListContext";

export default class ExModelListProvider extends Component {
  state = {
    modelListState: [
      {
        id: 1,
        name: "Tào Tháo",
        age: 65,
        img: "./model/model1.png",
        like: 0,
        active: false,
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        age: 54,
        img: "./model/model2.png",
        like: 0,
        active: false,
      },
      {
        id: 3,
        name: "Joker",
        age: 35,
        img: "./model/model3.png",
        like: 0,
        active: true,
      },
      {
        id: 4,
        name: "Trâm Anh",
        age: 18,
        img: "./model/model4.png",
        like: 0,
        active: false,
      },
    ],
  };

  setActiveModel = (id) => {
    let modelListStateUpdate = this.state.modelListState.map((model, index) => {
      //so sánh id được chọn
      if (model.id === id) {
        model.active = true;
        model.like += 1;
      } else {
        model.active = false;
      }
      return { ...model };
    });
    //sau khi xử lý mảng cập nhật lại giá trị state để giao diện render lại
    this.setState({
      modelListState: modelListStateUpdate,
    });
  };
  render() {
    return (
      <ExModelListContext.Provider
        value={{
          modelListState: this.state.modelListState,
          setActiveModel: this.setActiveModel,
        }}
      >
        {this.props.children}
      </ExModelListContext.Provider>
    );
  }
}
