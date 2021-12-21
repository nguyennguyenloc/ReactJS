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
  }
  return { ...state };
};

export default BaiTapGioHangReducer;
