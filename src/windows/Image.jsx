import React from 'react';
import { WindowWrapper } from "#hoc/WindowWrapper.jsx";
import { WindowsControls } from "#components/dock/WindowsControls.jsx";
import { ChevronLeft, ChevronRight, Columns } from "lucide-react";
import { useWindowStore } from "#store/window.jsx";

function Image() {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    console.log("image.jsx invoked");
    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col text-sm shadow-2xl">

            {/*  Header */}
            <div className="relative px-3 h-12 flex items-center justify-between bg-[#f5f5f4]/90 backdrop-blur-xl border-b border-black/10 text-gray-700 select-none z-10">

                <div className="flex items-center w-1/3 gap-4">
                    <WindowsControls target="imgfile" />

                    <div className="flex items-center gap-1">
                        <div className="p-1.5 rounded-md text-gray-400 hover:bg-black/5 transition-colors">
                            <ChevronLeft size={16} />
                        </div>
                        <div className="p-1.5 rounded-md text-gray-400 hover:bg-black/5 transition-colors">
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-1/3 text-[13px] font-semibold text-gray-800 truncate px-2 cursor-default">
                    {name || "Preview"}
                </div>

                <div className="flex items-center justify-end w-1/3 gap-1 pr-1">
                    <div className="p-1.5 rounded-md text-gray-600 hover:bg-black/5 transition-colors cursor-pointer" title="Toggle Sidebar">
                        <Columns size={16} />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 bg-[#ececeb] flex items-center justify-center p-3 overflow-hidden relative inner-shadow">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={name || "Viewed image"}
                        className="max-w-full max-h-full object-contain drop-shadow-lg rounded-sm"
                    />
                ) : null}
            </div>
        </div>
    );
}

export const ImageWindow = WindowWrapper(Image, 'imgfile',{
    height:500,
    width:630,
});