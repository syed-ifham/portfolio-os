import React from "react";
import NavbarLeft from "#components/navbar/NavbarLeft.jsx";
import NavbarRight from "#components/navbar/NavbarRight.jsx";
import {Z_INDEX} from "#constants";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full border-black/20 bg-white/20 backdrop-blur-md px-4 py-1
          text-black select-none "
        style={{
            zIndex:Z_INDEX.navbar
        }}
        >


        <NavbarLeft/>
            <NavbarRight/>

        </nav>
    );
};

export default Navbar;