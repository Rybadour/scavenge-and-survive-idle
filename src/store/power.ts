import config from "../config";
import { MyCreateSlice } from "./types";

export type PowerSlice = {
  flywheelCharge: number;
  maxFlywheelCharge: number;

  chargeFlywheel: (delta: number) => void,
};

const createPowerSlice: MyCreateSlice<PowerSlice, []> = (set, get) => {
  return {
    flywheelCharge: 99,
    maxFlywheelCharge: config.initialFlywheelCharge,
    
    chargeFlywheel: (delta: number) => {
      set({});
    }
  }
};

export default createPowerSlice;