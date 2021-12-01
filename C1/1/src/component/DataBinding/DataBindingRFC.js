import React from "react";
import Footer from "../Layout/Footer";

const school = "Đại học Vinh";
const covid = {
  name: "covid",
  age: 2,
};
const renderImage = () => {
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbaLS8Cu0OOBSak6WDn1XG0sE5af2tmJ-nw&usqp=CAU" />
  );
};

const renderMultiComponent = () => {
  return <Footer />;
};
export default function DataBindingRFC() {
  return (
    <div>
      <hr />
      <h1>React Function Component</h1>
      <h1>Trường: {school}</h1>
      <h1>
        Dịch {covid.name} đã {covid.age} năm
      </h1>
      {renderImage()}
      <hr />
      {renderMultiComponent()}
    </div>
  );
}
