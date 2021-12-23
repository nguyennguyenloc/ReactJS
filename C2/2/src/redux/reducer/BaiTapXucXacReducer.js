const stateDefault = {
  taiXiu: true, //true: tai (3-11), false: xỉu (12<)
  mangXucXac: [
    { ma: 1, hinhAnh: "./game/1.png" },
    { ma: 2, hinhAnh: "./game/2.png" },
    { ma: 3, hinhAnh: "./game/3.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //random sỗ ngẫu nhiên từ 1 ->6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //tạo ra xúc săc từ sô ngẫu nhiên
        let xucxacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./game/${soNgauNhien}.png`,
        };
        //push vào mảng xúc xắc ngẫu nhiên
        mangXucXacNgauNhien.push(xucxacNgauNhien);
      }
      //gán state mangXucXac = mangXucXacNgauNhien
      state.mangXucXac = mangXucXacNgauNhien;
      //xử lý tăng bàn chơi
      state.tongSoBanChoi += 1;
      //xử lý số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      console.log("điem" + tongSoDiem);
      //xét điều kiện để người dùng thắng
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
