import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";

class BaiTapBurger extends Component {
  renderBreadmid = () => {
    let { burger } = this.props;
    // c1
    let content = [];
    for (let propsBurger in burger) {
      // console.log(propBuger, burger[propBuger]);
      let breadMid = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        breadMid.push(
          <div key={i} className={propsBurger}>
            {burger[propsBurger]}
          </div>
        );
      }
      content.push(breadMid);
    }
    return content;

    // c2
    // console.log(Object.entries(burger));
    // return Object.entries(burger).map(([propsBurger, valueBurger], index) => {
    //   // console.log(propsBurger, valueBurger);
    //   let breadMid = [];
    //   for (let i = 0; i < valueBurger; i++) {
    //     breadMid.push(
    //       <div key={index} className={propsBurger}>
    //         {valueBurger}
    //       </div>
    //     );
    //   }
    //   return breadMid;
    // });
  };

  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <th>{propsMenu}</th>
          <th>
            <button className="btn-success">+</button>
            {burger[propsMenu]}
            <button className="btn-danger">-</button>
          </th>
          <th>{price}</th>
          <th>{burger[propsMenu] * price}</th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài tập Burger cybersoft</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadmid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng cộng</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BaiTapBurgerReducer.burger,
    menu: state.BaiTapBurgerReducer.menu,
    total: state.BaiTapBurgerReducer.total,
  };
};
export default connect(mapStateToProps)(BaiTapBurger);
