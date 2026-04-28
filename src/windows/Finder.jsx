import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import { ChevronLeft, ChevronRight, Search, Columns, LayoutGrid, Share } from 'lucide-react';
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {useLocationStore} from "#store/location.js";
import {FINDER_LOCATION} from "#constants/index.js";
import clsx from "clsx";

const Finder = ()=>{


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
                            item.id === activeLocation.id
                                ? "bg-[#e3effd] text-[#1a73e8]"
                                : "text-[#4b4b4b] hover:bg-gray-200/50"
                        )}
                    >
                        <img
                            src={item.icon}
                            className="w-3 h-3 object-contain"
                            alt={item.name}
                        />

                        <p className="text-[13px] font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    const {activeLocation,setActiveLocation} = useLocationStore();

    const openItem = (item)=>{

    };

    return <>
        <div className="w-full h-full bg-white rounded-xl overflow-hidden
        flex flex-col text-sm shadow-2xl">

            {/*  Header */}
            <div className="relative px-4 h-10 flex items-center justify-betweenbg-[#f6f6f6]/90 backdrop-blur-md border-b border-gray-200/80 text-gray-600 select-none">

                {/* Left: Window Controls & Navigation */}
                <div className="flex items-center gap-6 w-1/3">
                    <WindowsControls target="finder" />

                    <div className="flex items-center gap-4 ml-2">
                        <div className="flex items-center gap-3">
                            <ChevronLeft size={18} className="text-gray-400 cursor-default" />
                            <ChevronRight size={18} className="text-gray-400 cursor-default" />
                        </div>
                        <Columns size={16} className="hover:bg-gray-200 p-0.5 rounded transition-colors cursor-pointer" />
                    </div>
                </div>

                {/* Center: Title (Authentic Finder Style) */}
                <div className="flex items-center justify-center w-1/3">
                    <span className="font-bold text-gray-700 tracking-tight">Finder</span>
                </div>

                {/* Right: Tools & Search */}
                <div className="flex items-center justify-end gap-4 w-1/3">
                    <div className="flex items-center gap-3">
                        <LayoutGrid size={16} className="cursor-pointer hover:text-gray-900" />
                        <Share size={16} className="cursor-pointer hover:text-gray-900" />
                    </div>

                    <div className="relative flex items-center">
                        <Search size={13} className="absolute left-2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
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
                    {renderList("Favorites", Object.values(FINDER_LOCATION))}
                    {renderList("Work", FINDER_LOCATION.work.children)}
                </div>

                 {/* Content Area */}
                 <ul className="relative w-full h-full p-4 overflow-hidden select-none">
                     {activeLocation.children.map((item) => (
                         <li
                             key={item.id}
                             className={clsx(
                                 "absolute flex flex-col  items-center group cursor-default w-24",
                                 item.position
                             )}
                             style={{
                                 top:item.position.top,
                                 left:item.position.left,
                             }}
                             onClick={() => openItem(item)}
                         >
                             <div className="relative transition-transform active:scale-95">
                                 <img
                                     src={item.icon}
                                     alt={item.name}
                                     className="w-16 h-16  object-contain drop-shadow-md"
                                 />
                             </div>

                             <p className=" px-1.5 py-0.5 mt-1 text-center text-[12px] leading-tight text-gray-900
                          rounded-sm font-medium max-w-full wrap-break-word line-clamp-2
                          group-active:bg-[#1a73e8] group-active:text-white">
                                 {item.name}
                             </p>
                         </li>
                     ))}
                 </ul>


            </div>
        </div>
    </>
}
export const FinderWindow = WindowWrapper(Finder,'finder',
     {
         width: 650,
         height: 400,
         x: 350,
         y:180
     });

