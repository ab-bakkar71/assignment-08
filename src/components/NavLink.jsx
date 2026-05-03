import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = () => {
    const pathName = usePathname()
    return (
        <>
            <Link href="/" className={`py-2 px-4 rounded-sm mx-2 ${pathName === "/" ? "bg-[#198c19] text-white" : "hover:bg-[#00000028] transition duration-300"}`}> Home
            </Link>
            <Link href="/all-tiles" className={`py-2 px-4 rounded-sm mr-2 ${pathName === "/all-tiles" ? "bg-[#198c19] text-white" : "hover:bg-[#00000028] transition duration-300"}`}> All Tiles
            </Link>
            <Link href="/profile" className={`py-2 px-4 rounded-sm ${pathName === "/profile" ? "bg-[#198c19] text-white" : "hover:bg-[#00000028] transition duration-300"}`}> Profile
            </Link>
        </>
    );
};

export default NavLink;