import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeXemPhimType";

const stateDefault = {
  danhSachGheDangDat: [
    { soGhe: "A1", gia: 1000 },
    { soGhe: "A2", gia: 1000 },
  ],
};
const BaiTapDatVeXemPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        //ghế đang đặt đã đươc click => remove khỏi mảng đang đặt
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangDat = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDat.findIndex(
        (item) => item.soGhe === action.ghe
      );
      if (index !== -1) {
        //ghế đang đặt đã đươc click => remove khỏi mảng đang đặt
        danhSachGheDangDat.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeXemPhimReducer;
