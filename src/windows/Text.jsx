import {useWindowStore} from "#store/window.jsx";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {ChevronLeft, ChevronRight, Columns} from "lucide-react";
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";

const Text = ()=>{
    const {windows} = useWindowStore();

    const data = windows.txtfile?.data;

    if(!data)return null;

    const {name,image,subtitle,description} = data;

    return (
        <>
            <div className="w-full h-full bg-white rounded-xl overflow-hidden
        flex flex-col text-sm shadow-2xl">

                {/*  Header */}
                <div className="relative px-4 h-10 flex items-center justify-betweenbg-[#f6f6f6]/90 backdrop-blur-md border-b border-gray-200/80 text-gray-600 select-none">

                    {/* Left*/}
                    <div className="flex items-center gap-6 w-1/3">
                        <WindowsControls target="txtfile" />

                        <div className="flex items-center gap-4 ml-2">
                            <div className="flex items-center gap-3">
                                <ChevronLeft size={18} className="text-gray-400 cursor-default" />
                                <ChevronRight size={18} className="text-gray-400 cursor-default" />
                            </div>
                            <Columns size={16} className="hover:bg-gray-200 p-0.5 rounded transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="p-5 space-y-6 bg-white">
                    {
                        image?(
                            <div className="w-full">
                                <img src={image} alt={name} className="w-full auto rounded"/>
                            </div>
                        ) : null
                    }

                    {
                        subtitle ?<h3 className="text-lg font-semibold">{subtitle}</h3>:null
                    }

                    {
                        Array.isArray(description) && description.length > 0 ? (
                            <div className="space-y-3 leading-relaxed text-base text-grey-800">
                                {description.map((para, index) => (
                                    <p key={index}>{para}</p>
                                ))}
                            </div>
                        ):null
                    }

                </div>
            </div>
        </>
    );
};

export const TextWindow = WindowWrapper(Text,'txtfile')