import React, { PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    console.log("ok 1 lần");
    return (
      <div className="card text-white bg-dark" style={{ width: 250 }}>
        <img
          style={{ width: 250, height: 350 }}
          className="card img-top"
          src="https://fb-images.saostar.vn/wp700/pc/1637909829480/saostar-7nqf59ej2qt38rh2.jpeg"
          alt="123"
        />
        <div className="card-body">
          <h4 className="card-title">Họ và tên: Nanon</h4>
          <p className="card-text">Tuổi: 21</p>
          <p className="card-text">Số lượt like:{this.props.like.soLuong}</p>
        </div>
      </div>
    );
  }
}
