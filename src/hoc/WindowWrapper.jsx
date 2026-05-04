import {useWindowStore} from "#store/window.jsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {Z_INDEX} from "#constants";

gsap.registerPlugin(useGSAP, Draggable);

export const WindowWrapper = (Component, windowKey, options = {}) => {

    const Wrapped = (props) => {

        //listens to isOpen state
        const focusWindow = useWindowStore((state) => state.focusWindow);
        const windowState = useWindowStore((state) => state.windows[windowKey]);
        const isOpen = windowState?.isOpen;
        const zIndex = windowState?.zIndex || Z_INDEX.windowInitial;

        //animation
        const ref = useRef(null);
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            // Entrance Animation
            gsap.fromTo(
                el,
                {scale: 0.8, opacity: 0, y: 200},
                {scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power3.out"}
            );

            // ✅ Create Draggable instance ONCE
            const [draggableInstance] = Draggable.create(el, {
                type: "x,y",
                bounds: {
                    top: 25,
                    left: 10,
                    width: window.innerWidth - 15,
                    height: window.innerHeight - 35
                },
                onPress: () => focusWindow(windowKey),
            });

            // ✅ Debounce resize to prevent rapid calls stacking
            const handleResize = (() => {
                let timeoutId;
                return () => {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        if (draggableInstance) {
                            draggableInstance.applyBounds({
                                top: 25,
                                left: 10,
                                width: window.innerWidth - 15,
                                height: window.innerHeight - 35
                            });
                        }
                    }, 250);
                };
            })();

            window.addEventListener("resize", handleResize);
            document.addEventListener("fullscreenchange", handleResize);

            return () => {
                draggableInstance?.kill();
                window.removeEventListener("resize", handleResize);
                document.removeEventListener("fullscreenchange", handleResize);
            };

        }, [isOpen]);

        //decides whether to render the component or not
        if (!isOpen) return null;

        //window size & position
        const width = options.width || 600;
        const height = options.height || 400;
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
                    top:  initialY,
                    left: initialX,}}>
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};