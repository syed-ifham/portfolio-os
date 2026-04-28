import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {FINDER_LOCATION} from "#constants/index.js";

const DEFAULT_LOCATION = FINDER_LOCATION.work;

export const useLocationStore = create(immer((set)=>({

    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => set((state) =>{
        state.activeLocation = location;
    }),

    resetActiveLocation: () => set((state) =>{
        state.activeLocation = DEFAULT_LOCATION;
    }),

})));