import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((item, index) => {
      return (
        <img
          key={index}
          style={{ width: 35, height: 35 }}
          className="ml-2"
          src={item.hinhAnh}
          alt={item.hinhAnh}
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

//lấy state từ redux về thành props của component
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
