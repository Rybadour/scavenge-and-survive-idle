import config from "../config";
import { MyCreateSlice } from "./types";

export type PowerSlice = {
  flywheelCharge: number;
  maxFlywheelCharge: number;

  chargeFlywheel: (delta: number) => void,
  decayFlywheel: (delta: number) => void,
};

const createPowerSlice: MyCreateSlice<PowerSlice, []> = (set, get) => {
  return {
    flywheelCharge: 0,
    maxFlywheelCharge: config.initialFlywheelCharge,
    
    chargeFlywheel: (delta: number) => {
      set({
        flywheelCharge: get().flywheelCharge + config.flywheelChargeSpeed * delta/1000
      });
    },

    decayFlywheel: (delta: number) => {
      const charge = get().flywheelCharge;
      if (charge > 0) {
        const newCharge = charge - config.flywheelDecay * delta/1000;
        set({
          flywheelCharge: Math.max(newCharge, 0)
        });
      }
    }
  }
};

export default createPowerSlice;