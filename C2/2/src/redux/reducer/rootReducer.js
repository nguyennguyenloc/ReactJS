import { combineReducers } from "redux";
import BaiTapBurgerReducer from "./BaiTapBurgerReducer";
import BaiTapDatVeXemPhimReducer from "./BaiTapDatVeXemPhimReducer";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";

const rootReducer = combineReducers({
  //store tổng của ứng dụng
  stateGioHang: BaiTapGioHangReducer,
  BaiTapGameXucXacReducer: BaiTapXucXacReducer,
  BaiTapGameOanTuXiReducer: BaiTapOanTuXiReducer,
  BaiTapDatVeXemPhimReducer: BaiTapDatVeXemPhimReducer,
  BaiTapBurgerReducer: BaiTapBurgerReducer,
});

export default rootReducer;
