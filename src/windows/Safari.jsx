import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {ChevronRight, ChevronLeft, PanelLeft, ShieldHalf, Search, Share, Plus, Copy, MoveRight} from "lucide-react";

const Safari = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden
        flex flex-col text-sm shadow-2xl">

            {/*Header*/}
            <div className="relative flex items-center justify-between
             px-4 py-2 bg-[#f6f6f6] border-b border-gray-200 text-gray-500">

                {/* Left Section*/}
                <div className="flex items-center gap-4 w-50">
                    <WindowsControls target="safari"/>
                    <PanelLeft size={16} strokeWidth={1.5}
                               className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <div className="flex items-center gap-3">
                        <ChevronLeft size={18} strokeWidth={1.5}
                                     className="cursor-pointer hover:text-gray-800 transition-colors"/>
                        <ChevronRight size={18} strokeWidth={1.5} className="cursor-pointer text-gray-400"/>
                    </div>
                </div>

                {/* Center Section*/}
                <div className="flex-1 flex justify-center items-center gap-3">
                    <ShieldHalf size={16} strokeWidth={1.5}
                                className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <div
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-1 w-full max-w-100 shadow-sm">
                        <Search size={14} strokeWidth={2}
                                className="cursor-pointer hover:text-gray-800 transition-colors"/>
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="bg-transparent text-sm text-center w-full outline-none placeholder:text-gray-400 text-gray-700"/>
                    </div>
                </div>

                {/*Right Section*/}
                <div className="flex items-center gap-4 w-50 justify-end">
                    <Share size={16} strokeWidth={1.5}
                           className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <Plus size={18} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <Copy size={16} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors"/>
                </div>
            </div>

            {/*{Body}*/}
            <div
                className="flex-1 bg-white relative overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">

                <div className="w-60 h-40 mb-4 hover:-translate-y-3 transition-transform duration-500 cursor-pointer">
                    <img
                        src="/images/coming-soon.svg"
                        alt="Under Construction"
                        className="w-full h-full object-contain drop-shadow-xl "
                    />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                    Building in Progress
                </h2>
                <p className="text-gray-500 mb-4 max-w-sm text-sm sm:text-base">
                    I'm currently crafting this page. It will be ready for you to explore very soon!
                </p>

                <button className="group relative px-6 py-3 font-medium text-white bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
        <span className="relative z-10 flex items-center gap-2">
            Return to Safety
        </span>
                    <div
                        className="absolute inset-0 h-full w-full bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </button>
            </div>

        </div>
    );
};

// Slightly expanded the wrapper dimensions to fit the new UI beautifully
export const SafariWindow = WindowWrapper(Safari, 'safari', {
    width: 690,
    height: 430,
    x: 500,
    y: 90
});