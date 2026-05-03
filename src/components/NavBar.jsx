'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const NavBar = () => {
    // get user
    const userInfo = authClient.useSession()
    const user = userInfo.data?.user
    
    // sing out
    const handelLogOut = async() =>{
        await authClient.signOut();
    }

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
                    <ul className="hidden items-center gap-4 md:flex text-sm font-semibold">
                        <li>
                            <NavLink />
                        </li>

                    </ul>

                    <div className='hidden gap-2 md:flex'>
                        {/* not a user */}
                        {!user && <div className='flex gap-2'>
                            <Link href='/login' className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300'>Login</Link>
                            <Link href='/register' className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300'>Register</Link>
                        </div>}

                        {/* for user */}
                        {
                            user && <div className='hidden gap-2 md:flex'>
                                <Avatar size='md'>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy='no-referrer' />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={handelLogOut} size='md' variant='danger'>Log Out</Button>
                            </div>
                        }
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <li>
                                <NavLink />
                            </li>

                        </ul>

                        <div className='flex gap-2 my-2'>
                            {!user && <div className='flex gap-2'>
                                <Link href='/login' className="className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300">Login</Link>
                                <Link href='/register' className="className='py-2 px-4 rounded-sm border border-[#198c19] shadow-sm hover:text-white hover:bg-[#198c19] transition duration-300">Register</Link>
                            </div>}
                            {
                            user && <div className='flex gap-2 my-2'>
                                <Avatar size='md'>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy='no-referrer' />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={handelLogOut} size='md' variant='danger'>Log Out</Button>
                            </div>
                        }
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;