import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {ChevronLeft, ChevronRight, Search, Columns, LayoutGrid, Share} from 'lucide-react';
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {useLocationStore} from "#store/location.js";
import {LOCATIONS} from "#constants/index.js";
import clsx from "clsx";
import {useWindowStore} from "#store/window.jsx";
import { useState } from "react";

const Finder = () => {
    const openWindow = useWindowStore(s => s.openWindow);
    const {activeLocation, setActiveLocation} = useLocationStore();
    const [searchQuery, setSearchQuery] = useState("");

    const openItem = (item) => {

        if (item.kind === 'resume') {
            openWindow(item.type);
        }
        else if (item.kind === 'folder') {
            setActiveLocation(item);
        }
        else if (['url'].includes(item.fileType) && item.href) {
            return window.open(item.href, '_blank');
        }
        else if(item.kind === 'img'){
            openWindow(`${item.fileType}${item.kind}`, item);
        }
        else {
            openWindow(`${item.fileType}${item.kind}`, item);
        }

    };

    const renderList = (name, items) => (
        <div className="mb-4">
            <h3 className="px-3 mb-1 text-[11px] font-bold text-gray-400 uppercase tracking-tight">
                {name}
            </h3>
            <ul className="space-y-px">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            "flex items-center gap-2 px-3 py-1.5 rounded-md cursor-default transition-colors",
                            item.id === activeLocation?.id
                                ? "bg-[#e3effd] text-[#1a73e8]"
                                : "text-[#4b4b4b] hover:bg-gray-200/50"
                        )}
                    >
                        <img
                            src={item.icon}
                            className="w-3 h-3 object-contain"
                            alt={item.name}/>

                        <p className="text-[13px] font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return <>
        <div className="w-full h-full bg-white rounded-xl overflow-hidden
        flex flex-col text-sm shadow-2xl">

            {/*  Header */}
            <div className="relative px-4 h-10 flex items-center justify-between bg-[#f6f6f6]/90 backdrop-blur-md border-b border-gray-200/80 text-gray-600 select-none">

                {/* Left*/}
                <div className="flex items-center gap-6 w-1/3">
                    <WindowsControls target="finder"/>

                    <div className="flex items-center gap-4 ml-2">
                        <div className="flex items-center gap-3">
                            <ChevronLeft size={18} className="text-gray-400 cursor-default"/>
                            <ChevronRight size={18} className="text-gray-400 cursor-default"/>
                        </div>
                        <Columns size={16}
                                 className="hover:bg-gray-200 p-0.5 rounded transition-colors cursor-pointer"/>
                    </div>
                </div>

                {/* Center*/}
                <div className="flex items-center justify-center w-1/3">
                    <span className="font-bold text-gray-700 tracking-tight">Finder</span>
                </div>

                {/* Right*/}
                <div className="flex items-center justify-end gap-4 w-1/3">
                    <div className="flex items-center gap-3">
                        <LayoutGrid size={16} className="cursor-pointer hover:text-gray-900"/>
                        <Share size={16} className="cursor-pointer hover:text-gray-900"/>
                    </div>

                    <div className="relative flex items-center">
                        <Search size={13} className="absolute left-2 text-gray-400"/>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-200/50 border-none rounded-md py-1 pl-7 pr-2 w-32
                     focus:ring-0 text-[12px] placeholder-gray-500 outline-none"
                        />
                    </div>
                </div>

            </div>

            {/*Body*/}
            <div className="bg-white flex h-full">
                {/* Sidebar */}
                <div className="w-35 bg-[#f6f6f6] border-r border-gray-200 flex flex-col p-2 select-none">
                    {renderList("Favorites", Object.values(LOCATIONS.finder))}
                    {renderList("Work", LOCATIONS.finder.work.children)}
                </div>

                {/* Content Area */}
                <ul className="relative w-full h-full p-4 overflow-hidden select-none">
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={clsx(
                                "absolute flex flex-col items-center justify-center gap-1 group cursor-default w-32",
                                "p-2 rounded-xl transition-all duration-200 border border-transparent",
                                "hover:bg-black/8 hover:backdrop-blur-md hover:border-white/50 hover:shadow-sm",

                                item.position
                            )}
                            style={{
                                top: item.position?.top ?? 0,
                                left: item.position?.left ?? 0,
                            }}
                            onClick={() => openItem(item)}
                        >
                            {/* Icon Wrapper */}
                            <div className="relative transition-transform duration-100 active:scale-95">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-16 h-16 object-contain drop-shadow-md"
                                />
                            </div>

                            {/* Text Label */}
                            <p className="px-1.5 py-0.5 text-center text-[12px] leading-tight text-gray-900
                          rounded-sm font-medium max-w-full wrap-break-word line-clamp-2
                          transition-colors group-active:bg-[#0056FF] group-active:text-white">
                                {item.name}
                            </p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </>
}


export const FinderWindow = WindowWrapper(Finder, 'finder',
    {
        width: 650,
        height: 400,
        x: 500,
        y: 180
    });

