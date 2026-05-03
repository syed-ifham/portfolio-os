import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

// global hook wrapped in mutable state(immer)
export const useWindowStore  = create(immer((set)=>({

        // extracting apps
        windows : WINDOW_CONFIG,
        nextZIndex : Z_INDEX.windowInitial +1,

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
            if(!win) {
                console.error("ERROR : Couldn't find app id : ",windowKey);
                return;
            }

            win.isOpen = false;
            win.zIndex =Z_INDEX.windowInitial;
            win.data = null;
        }),

        focusWindow : (windowKey)=>set((state)=>{
            const win = state.windows[windowKey];
            if(!win)return;

            win.zIndex = state.nextZIndex++;
        }),
})),

);
