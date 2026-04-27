import {navLinks} from "#constants";
import {useWindowStore} from "#store/window.jsx";

const NavbarLeft = () => {

    const {openWindow} = useWindowStore();


    return (
        <div className="flex items-center gap-3">
            <img src="/icons/apple.png" alt="Logo" className="h-4 object-contain cursor-pointer" />

            <p className="font-bold text-sm cursor-pointer hover:bg-black/10 px-2 rounded transition-colors">
                Ifham's Portfolio
            </p>

            <ul className="hidden sm:flex items-center gap-1.5">
                {
                    navLinks.map((link)=>(
                        <li key={link.id}

                            onClick={()=>openWindow(link.type)}

                            className="cursor-pointer text-xs font-normal hover:bg-black/10 hover:underline px-2 rounded transition-colors">
                            <a href={link.url}>
                                {link.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default NavbarLeft;