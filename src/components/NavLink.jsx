import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = () => {
    const pathName = usePathname()
    return (
        <>
            <Link href="/" className={`py-2 px-4 rounded-sm mx-2 ${pathName === "/" ? "bg-[#198c19] text-white" : "hover:bg-[#00000028] transition duration-300"}`}> Home
            </Link>
            <Link href="/all-tiles" className={`py-2 px-4 rounded-sm ${pathName === "/all-tiles" ? "bg-[#198c19] text-white" : "hover:bg-[#00000028] transition duration-300"}`}> All Tiles
            </Link>
        </>
    );
};

export default NavLink;