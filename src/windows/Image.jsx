import React from 'react'
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {ChevronLeft, ChevronRight, Columns} from "lucide-react";

function Image() {
    const {windows} = window.imgfile.data;
    const data = windows.imgfile?.data;

    if(!data)return null;

    const {name,imageUrl}   = data;
    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden
        flex flex-col text-sm shadow-2xl">

            {/*  Header */}
            <div className="relative px-4 h-10 flex items-center justify-betweenbg-[#f6f6f6]/90 backdrop-blur-md border-b border-gray-200/80 text-gray-600 select-none">

                {/* Left*/}
                <div className="flex items-center gap-6 w-1/3">
                    <WindowsControls target="imgfile" />

                    <div className="flex items-center gap-4 ml-2">
                        <div className="flex items-center gap-3">
                            <ChevronLeft size={18} className="text-gray-400 cursor-default" />
                            <ChevronRight size={18} className="text-gray-400 cursor-default" />
                        </div>
                        <Columns size={16} className="hover:bg-gray-200 p-0.5 rounded transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="p-5 bg-white">
                {
                    imageUrl? (
                        <div className={"w-full"}>
                            <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded"/>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export const ImageWindow  = WindowWrapper(Image,'imgfile');
