import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {useEffect, useState} from "react";
import {
    ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf,
    Menu, Mic, Bell, ThumbsUp, ThumbsDown, Bookmark, MoreHorizontal, Sparkles, X, MoreVertical
} from "lucide-react";
import {LOCATIONS} from "#constants";

function Youtube() {
    const [isVideoLoading, setIsVideoLoading] = useState(true);

    // Listen for YouTube
    useEffect(() => {
        const handleYouTubeMessage = (event) => {
            if (event.origin !== "https://www.youtube.com") return;

            try {
                const data = JSON.parse(event.data);

                if (data.event === "onReady") {
                    setIsVideoLoading(false);
                }

                if (data.event === "onStateChange" && [1, 3, 5, -1].includes(data.info)) {
                    setIsVideoLoading(false);
                }
            } catch (e) {
            }
        };

        window.addEventListener("message", handleYouTubeMessage);
        return () => window.removeEventListener("message", handleYouTubeMessage);
    }, []);

    return (
        <div className="h-full w-full bg-white rounded-xl overflow-hidden flex flex-col text-sm shadow-2xl">

            {/*1. Header*/}
            <div
                className="flex items-center justify-between  px-4 py-2 bg-[#f6f6f6] border-b border-gray-200 text-gray-500">
                {/*LeftSection*/}
                <div className="flex items-center gap-4 w-50">
                    <WindowsControls target="youtube"/>
                    <PanelLeft size={16} strokeWidth={1.5}
                               className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <div className="flex items-center gap-3">
                        <ChevronLeft size={18} strokeWidth={1.5}
                                     className="cursor-pointer hover:text-gray-800 transition-colors"/>
                        <ChevronRight size={18} strokeWidth={1.5}
                                      className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    </div>

                </div>
                {/*Center*/}
                <div className="flex-1 flex justify-center items-center gap-3">
                    <ShieldHalf size={16} strokeWidth={1.5}
                                className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <div
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-1 w-full max-w-100 shadow-sm">
                        <Search size={14} strokeWidth={1.5}
                                className="cursor-pointer hover:text-gray-800 transition-colors"/>
                        <input type="text"
                               placeholder="Search or enter website name"
                               className="bg-transparent text-sm text-center w-full outline-none placeholder:text-gray-400 text-gray-700"/>
                    </div>
                </div>
                {/*Right*/}
                <div className="flex items-center gap-4 w-50 justify-end">
                    <Share size={16} strokeWidth={1.5}
                           className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <Plus size={18} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors"/>
                    <Copy size={16} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors"/>
                </div>

            </div>

            {/* 2. BODY  */}
            <div
                className="flex-1 overflow-hidden bg-[#0f0f0f] text-white flex flex-col relative w-full h-full font-sans">

                {/*Navigation Bar*/}
                <div className="shrink-0 bg-[#0f0f0f] flex items-center justify-between px-4 h-14 w-full">
                    {/*  Menu & Local Logo */}
                    <div className="flex items-center gap-4">
                        <div
                            className="p-2 hover:bg-[#272727] rounded-full cursor-pointer transition-colors hidden sm:block">
                            <Menu size={20} strokeWidth={1.5}/>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <img src="/icons/youtube.png" alt="YouTube Logo" className="h-5 object-contain"/>
                            <span className="text-xl font-semibold tracking-tighter ml-1">YouTube</span>
                            <span className="text-[10px] text-gray-400 -mt-3 ml-1">IN</span>
                        </div>
                    </div>

                    {/* CenterSearch */}
                    <div className="hidden md:flex items-center flex-1 max-w-180 mx-10">
                        <div
                            className="flex flex-1 items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2 focus-within:border-[#1c62b9]">
                            <Search size={18} className="text-gray-400 mr-3 hidden lg:block"/>
                            <input
                                type="text"
                                defaultValue="sweet little"
                                className="w-full bg-transparent outline-none text-base text-white placeholder:text-gray-400"
                            />
                            <div className="p-1 hover:bg-[#303030] rounded-full cursor-pointer transition-colors">
                                <X size={18} className="text-gray-400"/>
                            </div>
                        </div>
                        <button
                            className="bg-[#222222] border border-l-0 border-[#303030] px-5 py-2 rounded-r-full hover:bg-[#303030] transition-colors">
                            <Search size={20} strokeWidth={1.5}/>
                        </button>
                        <div
                            className="ml-4 p-2.5 bg-[#181818] hover:bg-[#303030] rounded-full cursor-pointer transition-colors">
                            <Mic size={20} strokeWidth={1.5}/>
                        </div>
                    </div>

                    {/* Right Profile  */}
                    <div className="flex items-center gap-2 sm:gap-4 justify-end pr-2">
                        <div
                            className="hidden lg:flex items-center gap-1 bg-[#222222] hover:bg-[#303030] px-3 py-1.5 rounded-full cursor-pointer transition-colors">
                            <Plus size={20} strokeWidth={1.5}/>
                            <span className="text-sm font-medium pr-1">Create</span>
                        </div>
                        <div className="relative p-2 hover:bg-[#272727] rounded-full cursor-pointer transition-colors">
                            <Bell size={20} strokeWidth={1.5}/>
                            <span
                                className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 border-[#0f0f0f]">9+</span>
                        </div>
                        <div
                            className="w-8 h-8 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 cursor-pointer overflow-hidden ml-2 shrink-0">
                            <img src={LOCATIONS.profile} alt="User Profile" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>

                {/* VIDEO PLAYER */}
                <div className="relative flex-1 w-full bg-black flex justify-center border-y border-[#272727]">
                    {/* Loading Overlay */}
                    {isVideoLoading && (
                        <div
                            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0f0f0f] text-white">
                            <div
                                className="w-10 h-10 border-4 border-gray-700 border-t-red-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-sm font-medium animate-pulse text-gray-300">
                                Please wait, video is loading...
                            </p>
                        </div>
                    )}
                    <iframe
                        className={`w-full h-full border-none transition-opacity duration-500 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                        src="https://www.youtube.com/embed/PuUfvaERmd8?si=QJu7xY_Y_DvuI2Xf&autoplay=1&start=30&modestbranding=1&enablejsapi=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onLoad={() => setTimeout(() => setIsVideoLoading(false), 3000)}
                    ></iframe>
                </div>


                {/* CONTENT BELOW VIDEO */}
                <div
                    className="shrink-0 w-full mx-auto px-4 sm:px-6 py-1 h-22 flex flex-col lg:flex-row justify-between items-end gap-4  bg-[#0f0f0f]">

                    {/* Left Side */}
                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <h1 className="text-[18px] font-bold leading-tight">Ifhamcore | Sweet Little Bumblebee</h1>

                        <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full overflow-hidden cursor-pointer shrink-0 bg-pink-200">
                                    <img src={LOCATIONS.profile} alt="Avatar"
                                         className="w-15 h-12 rounded-full object-cover shadow-sm border border-gray-200"/>
                                </div>
                                <div className="flex flex-col cursor-pointer">
                                    <span className="font-bold text-[15px] hover:text-gray-300">ifham</span>
                                    <span className="text-[11px] text-[#aaa]">SWE</span>
                                </div>
                                <button
                                    className="ml-2 px-3.5 py-1.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors">
                                    Subscribe
                                </button>
                            </div>

                            <div className="flex items-center gap-2 ml-2">
                                <div className="flex items-center bg-[#272727] rounded-full">
                                    <button
                                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#3f3f3f] rounded-l-full border-r border-[#3f3f3f] transition-colors">
                                        <ThumbsUp size={16} strokeWidth={1.5}/>
                                        <span className="text-sm font-medium">539k</span>
                                    </button>
                                    <button className="px-3 py-1.5 hover:bg-[#3f3f3f] rounded-r-full transition-colors">
                                        <ThumbsDown size={16} strokeWidth={1.5}/>
                                    </button>
                                </div>
                                <button
                                    className="flex items-center gap-2 px-3 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] rounded-full transition-colors">
                                    <Share size={16} strokeWidth={1.5}/>
                                    <span className="text-sm font-medium">Share</span>
                                </button>
                                <button
                                    className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] rounded-full transition-colors">
                                    <Sparkles size={16} strokeWidth={1.5}/>
                                    <span className="text-sm font-medium">Ask</span>
                                </button>
                                <button
                                    className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] rounded-full transition-colors">
                                    <Bookmark size={16} strokeWidth={1.5}/>
                                    <span className="text-sm font-medium">Save</span>
                                </button>
                                <button
                                    className="flex items-center justify-center w-8 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-full transition-colors shrink-0">
                                    <MoreHorizontal size={16} strokeWidth={1.5}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Playlist */}
                    <div
                        className="hidden lg:flex flex-col justify-between w-86 h-18 bg-[#222222] rounded-xl p-3 border border-[#303030]">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col pr-4">
                                <span className="text-[15px] font-bold leading-tight line-clamp-1">Mix – Ifhamcore  | Sweet Little...</span>
                                <span className="text-[12px] text-[#aaa] mt-0.5">Mixes are playlists that Ifham makes for you</span>
                            </div>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} strokeWidth={1.5}/>
                            </button>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <MoreVertical size={18} strokeWidth={1.5}/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const YoutubeWindow = WindowWrapper(Youtube, 'youtube', {
    width: 1080,
    height: 620,
    // x:250,
    y:45
});