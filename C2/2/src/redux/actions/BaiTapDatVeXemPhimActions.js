import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeXemPhimType";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (ghe) => {
  return {
    type: HUY_GHE,
    ghe,
  };
};
