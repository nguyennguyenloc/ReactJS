const stateDefault = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 4,
  },
  menu: {
    salad: 10,
    cheese: 10,
    beef: 10,
  },
  total: 30,
};
const BaiTapBurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default BaiTapBurgerReducer;
