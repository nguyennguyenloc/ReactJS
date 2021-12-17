import React, { Component } from "react";

export default class Child extends Component {
  renderSize = () => {
    let { size } = this.props.productItem;
    return size.map((number, index) => {
      return <button key={index}>{number}</button>;
    });
  };

  render() {
    let { src, desc } = this.props.productItem;
    let { shoesSize } = this.props;
    return (
      <div>
        <img style={{ width: 50 }} src={src} alt={Date.now()} />
        <div style={{ width: "250px" }} className="card text-white bg-primary">
          <img className="card-img-top" src={src} alt={Date.now()} />
          <div className="card-body">
            <h4 className="card-title">{desc}</h4>
            {this.renderSize()}
            <br />
            {shoesSize.map((number, index) => {
              return (
                <button className="btn btn-success" key={index}>
                  {number}
                </button>
              );
            })}
          </div>
        </div>
        <button onClick={() => this.props.showInfo(desc)}>Show Info</button>
      </div>
    );
  }
}
