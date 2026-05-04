import { LOCATIONS } from "#constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { useWindowStore } from "#store/window.jsx";
import { useLocationStore } from "#store/location.js";
import {useRef} from "react";

gsap.registerPlugin(useGSAP, Draggable);

const projects = LOCATIONS.finder.work?.children ?? [];

export const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const containerRef = useRef(null);

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow('finder');
    };

    useGSAP(() => {
        Draggable.create(".folder", {
            type: "x,y",
            zIndexBoost: false,

            onDragEnd: function() {
                gsap.to(this.target, {
                    x: 0,
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out"
                });
            }

        });
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen p-4 overflow-hidden z-0">
            <ul   className="w-full h-full">
                {projects.map((project) => (
                    <li
                        onClick={()=>  handleOpenProjectFinder(project)}

                        key={project.id}
                        data-project-id={project.id}
                        className={clsx(
                            "absolute group folder flex flex-col items-center w-24 cursor-pointer gap-1.5",
                            project.windowPosition
                        )}
                    >
                        <div className="relative flex items-center justify-center p-1 rounded-md transition-colors duration-200 group-hover:bg-black/10">
                            <img
                                src="/icons/mac-folder.png"
                                alt={project.name}
                                draggable={false}
                                className="w-16 h-16 drop-shadow-md"
                            />
                        </div>

                        <p className="text-white text-[11px] font-medium text-center leading-snug px-1.5 py-0.5 rounded-sm line-clamp-2
                          drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                          group-hover:bg-blue-600 group-hover:drop-shadow-none select-none">
                            {project.name}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
