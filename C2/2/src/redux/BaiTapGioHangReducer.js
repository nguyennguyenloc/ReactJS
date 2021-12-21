//setup một state giỏ hàng trên store
const stateGioHang = {
  gioHang: [
    { maSP: 1, tenSP: "Sản phẩm 1", hinhAnh: "", soLuong: 1, giaBan: 1000 },
  ],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  return { ...state };
};

export default BaiTapGioHangReducer;
