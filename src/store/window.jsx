import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

// global hook wrapped in mutable state(immer)
export const useWindowStore  = create(immer((set)=>({

        // extracting apps
        windows : WINDOW_CONFIG,
        nextZIndex : INITIAL_Z_INDEX +1,

    openWindow : (windowKey,data = null)=>set((state)=>{
        const win = state.windows[windowKey];
        if(!win) {
            console.error("ERROR : Couldn't find app id : ",windowKey);
            return;
        }

        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data??win.data;

        state.nextZIndex++;
    }),

        closeWindow : (windowKey)=>set((state)=>{
            const win = state.windows[windowKey];
            if(!win)return;

            win.isOpen = false;
            win.zIndex =INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusWindow : (windowKey)=>set((state)=>{
            const win = state.windows[windowKey];
            if(!win)return;

            win.zIndex = state.nextZIndex++;
        }),
})),

);
