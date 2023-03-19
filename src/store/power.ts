import global from "../config/global";
import { MyCreateSlice } from "./types";

export type PowerSlice = {
  maxPower: number;
  maxFlywheelCharge: number;

  power: number;
  flywheelCharge: number;
  isChargingFlywheel: boolean;

  update: (delta: number) => void,
  startFlywheel: () => void,
  stopFlywheel: () => void,
};

const createPowerSlice: MyCreateSlice<PowerSlice, []> = (set, get) => {
  return {
    power: 0,
    maxPower: global.initialMaxPower,
    flywheelCharge: 0,
    maxFlywheelCharge: global.initialFlywheelCharge,
    isChargingFlywheel: false,
    
    update: (delta: number) => {
      const perSec = delta/1000;
      const charge = get().flywheelCharge;

      // First do flywheel logic
      let newCharge = charge;
      if (get().isChargingFlywheel) {
        newCharge += global.flywheelChargeSpeed * perSec;
        newCharge = Math.min(newCharge, get().maxFlywheelCharge);
      } else if (charge > 0) {
        newCharge -= global.flywheelDecay * perSec;
        newCharge = Math.max(newCharge, 0);
      }

      if (charge != newCharge) {
        set({ flywheelCharge: newCharge });
      }

      // Then generators
      const newPower = get().power + newCharge;
      set({ power: Math.min(newPower, get().maxPower) });
    },

    startFlywheel: () => {
      set({isChargingFlywheel: true});
    },
  
    stopFlywheel: () => {
      set({isChargingFlywheel: false});
    }
  }
};

export default createPowerSlice;