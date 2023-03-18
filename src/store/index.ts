import { createLens } from "@dhmk/zustand-lens";
import create from "zustand";
import createPowerSlice, { PowerSlice } from "./power";

export type FullStore = {
  power: PowerSlice,
}

const useStore = create<FullStore>((set, get) => {
  const power = createLens(set, get, 'power');

  return {
    power: createPowerSlice(...power),
  }
});

export default useStore;