import items from "../config/items";
import scavenging from "../config/scavenging";
import { MyCreateSlice } from "./types";

interface Item {
  id: string;
  name: string;
}

export type ScavengingSlice = {
  items: Record<keyof typeof items, number>,
  isScavenging: boolean,
  zone: keyof typeof scavenging,
  currentProgress: number,
  maxProgress: number,

  update: (delta: number) => void,
  startScavenging: () => void,
};

const createScavengingSlice: MyCreateSlice<ScavengingSlice, []> = (set, get) => {
  return {
    items: {
      scrap: 0,
    },
    isScavenging: false,
    zone: 'zone1',
    currentProgress: 0,
    maxProgress: 0,
    
    update: (delta: number) => {
      if (!get().isScavenging) return;

      const newProgress = get().currentProgress + delta;
      if (newProgress >= get().maxProgress) {
        const newItems = {...get().items};
        newItems.scrap += 1;
        set({ isScavenging: false, items: newItems })
      } else {
        set({ currentProgress: newProgress });
      }
    },

    startScavenging: () => {
      set({
        isScavenging: true,
        currentProgress: 0,
        maxProgress: scavenging[get().zone].searchSpeedSecs * 1000, 
      });
    },
  }
};

export default createScavengingSlice;
