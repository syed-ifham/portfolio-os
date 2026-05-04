import {useRef} from "react";
import {dockApps, LOCATIONS, Z_INDEX} from "#constants";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useWindowStore} from "#store/window.jsx";
import {Tooltip} from "#components/utility/Tooltip.jsx";
import {useLocationStore} from "#store/location.js";

gsap.registerPlugin(useGSAP);

// Throttle with requestAnimationFrame for optimal performance
const throttleRAF = (func) => {
    let frameId = null;
    let lastArgs = null;
    return function(...args) {
        lastArgs = args;
        if (!frameId) {
            frameId = requestAnimationFrame(() => {
                func.apply(this, lastArgs);
                frameId = null;
            });
        }
    };
};

const Dock = () => {

    //global storage
    const {openWindow, closeWindow, focusWindow, windows} = useWindowStore();
    const {activeLocation, setActiveLocation, resetActiveLocation} = useLocationStore();

    //triggers isOpen state update
    const toggleApp = (app) => {
        if (!app.canOpen) {
            console.info(`app ${app.id} cannot be open`);
            return;
        }

        const targetWindowId = (app.id === 'finder' || app.id === 'trash') ? 'finder' : app.id;

        const window = windows[targetWindowId];
        if (!window) {
            console.error(`window not found! ${targetWindowId}`);
            return;
        }

        if (app.id === 'trash') {
            if (!window.isOpen) openWindow(targetWindowId);
            if (activeLocation !== LOCATIONS.finder.trash) {
                setActiveLocation(LOCATIONS.finder.trash);
                focusWindow(targetWindowId);
                return;
            }
        }

        if (app.id === 'finder') {
            if (activeLocation !== LOCATIONS.finder.work) {
                resetActiveLocation();
                focusWindow(targetWindowId);

                return;
            }
        }


        if (window.isOpen) {
            closeWindow(targetWindowId);
        } else {
            openWindow(targetWindowId);
        }
    };

    //animation
    const dockRef = useRef(null);
    //animation & drag
    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll("button");

        gsap.set(icons, {transformOrigin: "bottom center"});

        const animateIcons = (mouseX) => {
            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const center = rect.left + rect.width / 2;

                const distance = Math.abs(mouseX - center);

                const intensity = Math.exp(-(distance ** 2) / 1000);

                gsap.to(icon, {
                    scale: 1 + 0.3 * intensity,
                    y: -10 * intensity,
                    duration: 0.15,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        };

        const handleMouseMove = (e) => {
            throttleRAF(animateIcons)(e.clientX);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1, y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto"
                });
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, []);
    return (<section id="dock" className="absolute bottom-4 left-1/2 -translate-x-1/2  select-none max-sm:hidden"
                     style={{zIndex: Z_INDEX.dock}}>
        <div
            ref={dockRef}
            className="bg-white/30 backdrop-blur-lg border-black/20 shadow-lg justify-between rounded-2xl p-1.5 flex items-end gap-3">
            {dockApps.map(({id, name, icon, canOpen}) => (
                <div key={id} className="group relative flex justify-center size-10 3xl:size-20">
                    <Tooltip text={name} position="top"/>
                    <button
                        aria-label={name}
                        type="button"
                        className="size-10 3xl:size-20 cursor-pointer disabled:cursor-default"
                        disabled={!canOpen}

                        onClick={() => toggleApp({id, canOpen})}>
                        <img
                            src={icon}
                            alt={name}
                            className="object-cover object-center w-full h-full pointer-events-none"
                        />
                    </button>
                </div>))}
        </div>
    </section>);
}

export default Dock;
