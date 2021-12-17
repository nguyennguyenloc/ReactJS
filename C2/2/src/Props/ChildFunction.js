import React from "react";

export default function ChildFunction(props) {
  return (
    <div>
      <img style={{ width: 50 }} src={props.propSource} alt={Date.now()} />
      <div style={{ width: "250px" }} className="card text-white bg-primary">
        <img className="card-img-top" src={props.propSource} alt={Date.now()} />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
        </div>
      </div>
    </div>
  );
}
