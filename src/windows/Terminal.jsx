import { WindowWrapper } from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";

const Terminal = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col font-mono text-sm shadow-2xl">

            {/* Window Header */}
            <div className="relative flex items-center px-2 py-3 bg-[#f5f5f5] border-b border-gray-200">
                <div>
                    <WindowsControls target="terminal"/>
                </div>

                <h2 className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-400 font-sans font-bold">
                    Tech Stack
                </h2>
            </div>

            {/* Terminal Body */}
            <div className="p-3 flex-1 text-gray-800">

                <p className="mb-2 text-black">
                    <span className="font-bold">@ifham % </span>
                    show techstack
                </p>

                <div className="flex items-center px-2 mb-2 font-bold text-gray-700">
                    <p className="w-36 ml-7">Category</p>
                    <p>Technologies</p>
                </div>

                <div className="border-b border-dashed border-gray-400 mb-2"></div>

                {/* Tech Stack List */}
                <ul className="flex flex-col gap-2">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-start px-2">

                            <Check
                                className="text-emerald-500 shrink-0 mt-0.5"
                                size={16}
                                strokeWidth={3}
                            />
                            <h3 className="text-emerald-500 font-bold w-36 ml-3 shrink-0">
                                {category}
                            </h3>

                            <div className="flex-1 font-medium text-black">
                                {items.join(", ")}
                            </div>

                        </li>
                    ))}
                </ul>

                <div className="border-b border-dashed border-gray-400 my-2"></div>

                <div className="flex flex-col gap-2 px-2">
                    <p className="flex items-center text-emerald-500 font-bold">
                        <Check size={18} strokeWidth={3} className="mr-3 shrink-0" />
                        {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                    </p>
                    <p className="flex items-center text-black font-bold">
                        <Flag size={14} fill="black" className="mr-3 ml-0.5 shrink-0" />
                        Render time: 6ms
                    </p>
                </div>

            </div>
        </div>
    );
};

export const TerminalWindow = WindowWrapper(Terminal, 'terminal',
    {width: 600,
        height: 350,
        x: 700,
        y:180
    });

