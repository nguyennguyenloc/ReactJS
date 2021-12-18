import React, { Component } from "react";
import DanhSachSanPham from "./Props/DanhSachSanPham";
// import ProductList from "./Props/ProductList";
// import DemoProps from "./Props/DemoProps";
// import dataJson from "./Data/data.json";
export default class App extends Component {
  render() {
    return (
      // <div className="container-fluid">
      //   {/* <DemoProps /> */}
      //   <div className="row">
      //     <div className="col-4">
      //       <div
      //         style={{ minHeight: "800px" }}
      //         className="nav flex-column nav-pills justify-content-center"
      //         id="v-pills-tab"
      //         role="tablist"
      //         aria-orientation="vertical"
      //       >
      //         <a
      //           className="nav-link active"
      //           id="v-pills-home-tab"
      //           data-toggle="pill"
      //           href="#home"
      //           role="tab"
      //           aria-controls="home"
      //           aria-selected="true"
      //         >
      //           Home
      //         </a>
      //         <a
      //           className="nav-link"
      //           id="v-pills-profile-tab"
      //           data-toggle="pill"
      //           href="#profile"
      //           role="tab"
      //           aria-controls="profile"
      //           aria-selected="false"
      //         >
      //           Shop
      //         </a>
      //       </div>
      //     </div>
      //     <div className="col-8 productList">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div
      //           className="tab-pane fade show active"
      //           id="home"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-home-tab"
      //         >
      //           <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div
      //           className="tab-pane fade"
      //           id="profile"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-profile-tab"
      //         >
      //           Shop
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        <DanhSachSanPham />
      </div>
    );
  }
}
