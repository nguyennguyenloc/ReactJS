import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";

const rootReducer = combineReducers({
  //store tổng của ứng dụng
  stateGioHang: BaiTapGioHangReducer,
  BaiTapGameXucXacReducer: BaiTapXucXacReducer,
});

export default rootReducer;
