import { WindowsControls } from "#components/dock/WindowsControls.jsx";
import { WindowWrapper } from "#hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {Tooltip} from "#components/utility/Tooltip.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl  flex flex-col shadow-2xl">

            {/* Window Header */}
            <div className="relative flex justify-between items-center px-4 py-1.5 bg-[#f6f6f6] border-b border-gray-200 rounded-t-xl">
                <div className="w-25">
                    <WindowsControls target="resume" />
                </div>

                <h2 className="absolute left-1/2 -translate-x-1/2 text-[13px] text-gray-600 font-sans font-semibold tracking-wide">
                    Resume.pdf
                </h2>

                <div className="w-25 flex justify-end">

                    <a
                        href="/files/resume.pdf"
                        download
                        className=" group relative
                         p-1.5 rounded-md text-gray-500 transition-all  duration-200 hover:bg-gray-500 hover:text-white active:bg-gray-800 active:scale-95"
                    >
                        <Tooltip text="Download resume" position="bottom"/>

                        <Download size={18} strokeWidth={2} />
                    </a>

                </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#e5e5e5] flex justify-center py-1.5">
                <Document
                    file="/files/resume.pdf"
                    className="flex flex-col items-center drop-shadow-lg"
                    loading={<div className="text-gray-500 text-sm">Loading PDF...</div>}
                    error={<div className="text-red-500 text-sm">Failed to load PDF. Check the path!</div>}
                >
                    <Page
                        pageNumber={1}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={520}
                        className="bg-white"
                    />
                </Document>
            </div>

        </div>
    );
}

export const ResumeWindow = WindowWrapper(Resume, 'resume', {
    width: 550,
    height: 600,
    x: 100,
    y: 50
});