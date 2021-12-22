const stateDefault = {
  taiXiu: true, //true: tai (3-11), false: xỉu (12<)
  mangXucXac: [
    { ma: 1, hinhAnh: "./game/1.png" },
    { ma: 1, hinhAnh: "./game/2.png" },
    { ma: 1, hinhAnh: "./game/3.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
