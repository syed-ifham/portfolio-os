import {WindowWrapper} from "#hoc/WindowWrapper.jsx";
import {WindowsControls} from "#components/dock/WindowsControls.jsx";
import {socials} from "#constants/index.js";

const Contact = () => {

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full h-full font-sans">
            {/* Window Header */}
            <div className="relative flex items-center px-3 py-3 bg-[#f5f5f5] border-b border-gray-200">
                <div className="flex items-center">
                    <WindowsControls target="contact"/>
                </div>

                <h2 className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-500 font-bold">
                    Contact Me
                </h2>
            </div>

            {/* Window Body */}
            <div className="p-6 space-y-4">

                <div className="flex items-center gap-5 sm:gap-6">

                    <div className="relative shrink-0">
                        <img
                            src="/images/ifham.png"
                            alt="Ifham"
                            className="w-18 h-22 rounded-full object-cover shadow-sm border border-gray-200"
                        />
                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            Let's Connect
                        </h1>

                        <p className="text-gray-600 text-sm mt-1 mb-2.5 leading-relaxed max-w-sm">
                            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
                        </p>

                        <a
                            href="mailto:syedifham300@gmail.com"
                            className="inline-flex items-center gap-2 px-3 py-1.5 w-fit rounded-lg bg-gray-100 hover:bg-[#ea4335]/10 text-gray-700 hover:text-[#ea4335] text-sm font-medium transition-all duration-200 group border border-transparent hover:border-[#ea4335]/20"
                        >
                            <svg
                                className="w-4 h-4 text-gray-500 group-hover:text-[#ea4335] transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            syedifham300@gmail.com
                        </a>

                    </div>

                </div>

                {/* Social Cards */}
                <ul className="flex flex-col  sm:flex-row gap-3 pt-2">
                    {socials.map((item)=> (
                        <li
                            key={item.id}
                            style={{backgroundColor: item.bg}}
                            className="flex-1 rounded-xl"
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col justify-between h-24 p-3 text-white"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.text}
                                    className="w-6 h-6 filter invert brightness-0"
                                />
                                <p className="text-sm font-semibold">{item.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export const ContactWindow = WindowWrapper(Contact, 'contact',{
    height:350,
    width:600,
});