import React from "react";

export default function ChildFunction(props) {
  let { src, name } = props.productItem;
  return (
    <div>
      <img style={{ width: 50 }} src={src} alt={Date.now()} />
      <div style={{ width: "250px" }} className="card text-white bg-primary">
        <img className="card-img-top" src={src} alt={Date.now()} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
        </div>
      </div>
    </div>
  );
}
