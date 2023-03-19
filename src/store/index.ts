import { createLens } from "@dhmk/zustand-lens";
import create from "zustand";
import createPowerSlice, { PowerSlice } from "./power";
import createScavengingSlice, { ScavengingSlice } from "./scavenging";

export type FullStore = {
  power: PowerSlice,
  scavenging: ScavengingSlice,
}

const useStore = create<FullStore>((set, get) => {
  const power = createLens(set, get, 'power');
  const scavenging = createLens(set, get, 'scavenging');

  return {
    power: createPowerSlice(...power),
    scavenging: createScavengingSlice(...scavenging),
  }
});

export default useStore;