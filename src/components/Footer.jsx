import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import FooterInput from './FooterInput';

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-background/70 backdrop-blur-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto py-10 border-b border-gray-500/30">

                <div className="max-w-96">
                    <h1 className='text-2xl font-bold'><span className='text-[#198c19]'>Tails</span> Gallery</h1>
                    <p className="mt-6 text-sm text-gray-500">
                        Luxurious colorful marble tile that adds a clean and elegant look to any living space.
                    </p>
                    <div className="flex items-center text-xl gap-2 mt-3">
                        <Link href='#'>
                            <FaFacebook />
                        </Link>
                        <Link href="#">
                            <FaLinkedin />
                        </Link>
                        <Link href="#">
                            <FaGithub />

                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">

                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/all-tiles">All Tiles</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterInput />
                </div>

            </div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                Copyright 2024 © <Link href="https://prebuiltui.com">TilesGallery</Link>. All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;