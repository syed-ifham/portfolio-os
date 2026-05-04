import {useWindowStore} from "#store/window.jsx";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {ChevronLeft, ChevronRight, Columns, FileText, Share, Search} from 'lucide-react';
import {WindowWrapper} from "#hoc/WindowWrapper.jsx";

const Text = () => {
    const {windows} = useWindowStore();

    const data = windows.txtfile?.data;
    if (!data) return null;
    
    const defaultListIcons = ["🎨", "🪟", "⚡", "🛠️", "🚀", "💡", "🔥"];
    const listIcons = data.listIcons || defaultListIcons;

    return (<div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col text-sm shadow-2xl">
            {/*  Header */}
            <div
                className="relative px-3 h-12 flex items-center justify-between bg-[#f5f5f4]/90 backdrop-blur-xl border-b border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-gray-700 select-none rounded-t-xl">
                <div className="flex items-center w-1/3 gap-4">
                    <WindowsControls target="txtfile"/>
                    <div className="flex items-center gap-1">
                        <div className="p-1.5 rounded-md text-gray-400 hover:bg-black/5 transition-colors">
                            <ChevronLeft size={16}/>
                        </div>
                        <div className="p-1.5 rounded-md text-gray-400 hover:bg-black/5 transition-colors">
                            <ChevronRight size={16}/>
                        </div>
                    </div>
                </div>

                {/* Center */}
                <div
                    className="flex justify-center items-center w-1/3 text-[13px] font-semibold text-gray-800 cursor-default">
                    <FileText size={14} className="mr-1.5 text-gray-500"/>
                    {data.name}
                </div>

                {/* Right*/}
                <div className="flex items-center justify-end w-1/3 gap-1 pr-1">
                    <div className="p-1.5 rounded-md text-gray-600 hover:bg-black/5 transition-colors cursor-pointer"
                         title="Formatting">
                        <Columns size={16}/>
                    </div>
                    <div className="p-1.5 rounded-md text-gray-600 hover:bg-black/5 transition-colors cursor-pointer"
                         title="Search">
                        <Search size={16}/>
                    </div>
                    <div className="p-1.5 rounded-md text-gray-600 hover:bg-black/5 transition-colors cursor-pointer"
                         title="Share">
                        <Share size={16}/>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex-1 p-8 bg-white overflow-y-auto rounded-b-xl text-[#24292f]">

                <div className="max-w-3xl mx-auto">

                    {/* Title Section */}
                    {data.subtitle && (
                        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
                            {data.headerIcon && (
                                <span className="text-3xl" role="img" aria-label="icon">
                                {data.headerIcon}
                            </span>
                            )}
                            <h1 className="text-3xl font-bold tracking-tight uppercase">
                                {data.subtitle}
                            </h1>
                        </div>
                    )}

                    {data.links && data.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-6">
                            {data.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 text-[13px] font-medium bg-[#f6f8fa] border border-[#d0d7de] rounded-full px-3 py-1 hover:bg-[#f3f4f6] transition-colors text-gray-800 hover:text-blue-600 hover:underline"
                                >
                                    <span>{link.icon}</span> {link.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Introduction */}
                    {data.introduction && (
                        <p className="text-[15px] leading-[1.6] mb-8 text-gray-800">
                            {data.introduction}
                        </p>
                    )}

                    {/* Subheading for Features */}
                    {data.description && data.description.length > 0 && (
                        <>
                            <h2 className="text-2xl font-semibold mb-5 mt-8 pb-2 border-b border-gray-200 flex items-center gap-2">
                                <span>✨</span> Features & Details
                            </h2>

                            <ul className="space-y-5">
                                {data.description.map((item, index) => {
                                    // Intelligently split "Title: Description" from your existing keys
                                    const colonIndex = item.indexOf(':');
                                    const hasTitle = colonIndex !== -1;

                                    const title = hasTitle ? item.substring(0, colonIndex).trim() : '';
                                    const content = hasTitle ? item.substring(colonIndex + 1).trim() : item;
                                    const icon = listIcons[index % listIcons.length];

                                    return (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-1 text-lg">{icon}</span>
                                            <div>
                                                {hasTitle && (
                                                    <strong className="text-[15px] text-gray-900 font-semibold">
                                                        {title}:
                                                    </strong>
                                                )}
                                                <p className={`text-[14px] text-gray-600 leading-relaxed ${hasTitle ? 'mt-1' : ''}`}>
                                                    {content}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}

                </div>
            </div>

        </div>
    );
};

export const TextWindow = WindowWrapper(Text, 'txtfile',
    {
        height: 400,
        width: 700,
    })