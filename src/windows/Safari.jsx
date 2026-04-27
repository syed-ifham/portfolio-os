import { WindowsControls } from "#components/dock/WindowsControls.jsx";
import { WindowWrapper } from "#hoc/WindowWrapper.jsx";
import { ChevronRight, ChevronLeft, PanelLeft, ShieldHalf, Search, Share, Plus, Copy, MoveRight } from "lucide-react";
import { blogPost } from "#constants/index.js";

const Safari = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col text-sm shadow-2xl">

            {/*Header*/}
            <div className="relative flex items-center justify-between px-4 py-2 bg-[#f6f6f6] border-b border-gray-200 text-gray-500">

                {/* Left Section*/}
                <div className="flex items-center gap-4 w-50">
                    <WindowsControls target="safari" />
                    <PanelLeft size={16} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors" />
                    <div className="flex items-center gap-3">
                        <ChevronLeft size={18} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors" />
                        <ChevronRight size={18} strokeWidth={1.5} className="cursor-pointer text-gray-400" />
                    </div>
                </div>

                {/* Center Section*/}
                <div className="flex-1 flex justify-center items-center gap-3">
                    <ShieldHalf size={16} strokeWidth={1.5} className="text-gray-400" />
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-1 w-full max-w-100 shadow-sm">
                        <Search size={14} strokeWidth={2} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="bg-transparent text-xs text-center w-full outline-none placeholder:text-gray-400 text-gray-700"
                        />
                    </div>
                </div>

                {/*Right Section*/}
                <div className="flex items-center gap-4 w-50 justify-end">
                    <Share size={16} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors" />
                    <Plus size={18} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors" />
                    <Copy size={16} strokeWidth={1.5} className="cursor-pointer hover:text-gray-800 transition-colors" />
                </div>
            </div>

            {/*Body*/}
            <div className="flex-1 overflow-y-auto px-10 py-4 bg-white">
                <h2 className="text-[#c11574] text-xl font-bold mb-5">My Developer Blog</h2>

                <div className="flex flex-col gap-4">
                    {blogPost.map(post => (
                        <div key={post.id} className="flex items-center gap-6 group">

                            <div className="w-18 h-18 shrink-0 flex items-center justify-center">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-contain drop-shadow-md"
                                />
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <p className="text-xs font-medium text-gray-500">{post.date}</p>
                                <h3 className="text-[15px] font-semibold text-gray-800 leading-tight">
                                    {post.title}
                                </h3>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-1 hover:underline w-fit"
                                >
                                    Check out the full post
                                    <MoveRight size={14} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Slightly expanded the wrapper dimensions to fit the new UI beautifully
export const SafariWindow = WindowWrapper(Safari, 'safari', {
    width: 650,
    height: 400,
    x: 450,
    y: 100
});