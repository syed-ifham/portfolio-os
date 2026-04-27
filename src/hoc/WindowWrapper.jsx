import { useWindowStore } from "#store/window.jsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

export const WindowWrapper = (Component, windowKey, options = {}) => {

    const Wrapped = (props) => {

        //re-renders all dock app when focused,close,open

        // const { focusWindow, windows } = useWindowStore();
        // const windowState = windows[windowKey];

        //solved
        const focusWindow = useWindowStore((state) => state.focusWindow);
        const windowState = useWindowStore((state) => state.windows[windowKey]);


        const isOpen = windowState?.isOpen;
        const zIndex = windowState?.zIndex || 0;
        const width = options.width || 700;
        const height = options.height || 400;

        const ref = useRef(null);
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            // Entrance Animation
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 200 },
                { scale: 1, opacity: 1, y: 0, duration: 0.25, ease:"power3.out" }
            );

            const [instance] = Draggable.create(el, {
                type: "x,y",
                // Prevents the user from dragging the window off the screen
                // bounds: "body",

                bounds: {
                    top: 25,
                    left: 10,
                    width: window.innerWidth - 15,
                    height: window.innerHeight - 35
                },

                // Brings window to front when clicked
                onPress: () => focusWindow(windowKey),
            });

            return () => instance.kill();

        }, [isOpen]);


        //decides whether to render the component or not
        if (!isOpen) return null;

        const initialX = options.x !== undefined ? options.x : (window.innerWidth - width) / 2;
        const initialY = options.y !== undefined ? options.y : (window.innerHeight - height) / 2;

        return (
            <section
                id={windowKey}
                ref={ref}
                className="absolute shadow-2xl rounded-xl"
                style={{
                    zIndex,
                    width,
                    height,
                    top: initialY,
                    left: initialX,
                }}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};