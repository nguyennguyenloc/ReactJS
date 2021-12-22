import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";

const rootReducer = combineReducers({
  //store tổng của ứng dụng
  stateGioHang: BaiTapGioHangReducer,
  BaiTapGameXucXacReducer: BaiTapXucXacReducer,
  BaiTapGameOanTuXiReducer: BaiTapOanTuXiReducer,
});

export default rootReducer;
