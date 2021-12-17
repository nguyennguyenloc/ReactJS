import React, { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

export default class Parent extends Component {
  src =
    "https://product.hstatic.net/1000231532/product/lap_rap_mo_hinh_doraemon_chinh_hang_gia_re_7fb1dc0eed9e4a5fb14008f72a1c03ce_master.jpg";
  name = "đoremon";
  render() {
    return (
      <div>
        <Child propSource={this.src} name={this.name} />
        <Child
          propSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pYFcP5ZdM9C-U5cmMGgsLnXCn9lle3sbqQ&usqp=CAU"
          }
          name={"nobita"}
        />
        <input type="text" placeholder="Trên là class, dưới là function" />
        <ChildFunction propSource={this.src} name={this.name} />

        <ChildFunction
          propSource="https://file.vfo.vn/hinh/2018/02/hinh-anh-hinh-nen-xuka-dep-buon-de-thuong-10.png"
          name={"xaku"}
        />
      </div>
    );
  }
}
