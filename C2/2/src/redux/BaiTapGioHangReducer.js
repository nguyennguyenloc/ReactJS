//setup một state giỏ hàng trên store
const stateGioHang = {
  gioHang: [
    // { maSP: 1, tenSP: "Sản phẩm 1", hinhAnh: "", soLuong: 1, giaBan: 1000 },
  ],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(
        (spGioHang) => spGioHang.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }

      //setState trong redux
      state.gioHang = [...state.gioHang];
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }
      //cập nhật state giỏ hàng
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
