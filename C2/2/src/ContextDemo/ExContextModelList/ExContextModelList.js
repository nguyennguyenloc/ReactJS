import React, { Component } from "react";
import ModelList from "./ModelList";
import ProfileModel from "./ProfileModel";

export default class ExContextModelList extends Component {
  render() {
    return (
      <div className="container">
        <ProfileModel />
        <ModelList />
      </div>
    );
  }
}
