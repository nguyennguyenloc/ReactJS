const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./gameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love you 3000!!!",
  soBanThang: 0,
  soLanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./gameOanTuXi/keo.png" },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      //tạo mảng cược mới từ mảng cược cũ và action maCuoc do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
