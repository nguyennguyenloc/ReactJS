import "./App.css";
// import LayoutMainHome from "./component/BaiTapThucHanhLayout/Layout";
import DataBindingComponent from "./component/DataBinding/DataBinding";
import DataBindingRFC from "./component/DataBinding/DataBindingRFC";
// import LayoutMain from "./component/Layout/LayoutMain";

function App() {
  return (
    <div className="App">
      {/* <LayoutMain /> */}
      {/* <LayoutMainHome /> */}
      <DataBindingComponent />
      <DataBindingRFC />
    </div>
  );
}

export default App;
