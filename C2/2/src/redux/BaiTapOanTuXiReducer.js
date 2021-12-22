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
      //setstate mảng cưỢc => render lại giao diện
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      state.soLanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") {
            state.ketQua = "hoà nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua sml!!!";
          } else {
            state.ketQua = "I'm iron man, i love you 3000!!!";
            state.soBanThang += 1;
          }
          break;
        }
        case "bua": {
          if (computer.ma === "bua") {
            state.ketQua = "hoà nhau!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "thua sml!!!";
          } else {
            state.ketQua = "I'm iron man, i love you 3000!!!";
            state.soBanThang += 1;
          }
          break;
        }
        case "bao": {
          if (computer.ma === "bao") {
            state.ketQua = "hoà nhau!!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "thua sml!!!";
          } else {
            state.ketQua = "I'm iron man, i love you 3000!!!";
            state.soBanThang += 1;
          }
          break;
        }
        default:
          state.ketQua = "I'm iron man, i love you 3000!!!";
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
