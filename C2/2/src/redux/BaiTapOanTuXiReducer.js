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
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
