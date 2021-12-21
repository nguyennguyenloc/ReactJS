import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

const rootReducer = combineReducers({
  //store tổng của ứng dụng
  stateGioHang: BaiTapGioHangReducer,
});

export default rootReducer;
