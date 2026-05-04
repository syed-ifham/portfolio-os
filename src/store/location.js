import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {LOCATIONS} from "#constants/index.js";

const DEFAULT_LOCATION = LOCATIONS.finder.work;

export const useLocationStore = create(immer((set) => ({

  activeLocation: DEFAULT_LOCATION,

  setActiveLocation: (location) => set((state) => {
    state.activeLocation = location ?? DEFAULT_LOCATION;
  }),

  resetActiveLocation: () => set((state) => {
    state.activeLocation = DEFAULT_LOCATION;
  }),

})));
