'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className='bg-background/70 backdrop-blur-lg shadow-sm'>
            <div className="sticky top-0 z-40 w-full container mx-auto ">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Tiles Gallery</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <Link className='text-2xl font-bold' href='/'><span className='text-[#198c19]'>Tiles</span> Gallery</Link>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li>
                            <NavLink/>
                        </li>
                        
                    </ul>

                    <div className='hidden gap-2 md:flex'>
                        <Link  href='/login' className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300'>Login</Link>
                        <Link href='registrar' className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300'>Register</Link>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <li>
                                <NavLink/>
                            </li>
                           
                        </ul>

                        <div className='flex gap-2'>
                            <Link href='/login' className="block py-2">Login</Link>
                            <Link href='registrar' className="block py-2">Register</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;