import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import 'animate.css';

const Hero = () => {
    return (
        <>
            <section className="relative h-[80vh] flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-[url('https://i.ibb.co.com/PZRrcDQ9/Tiles.jpg')] bg-cover bg-center rounded-lg mb-20">

             <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            
            <div className='relative flex flex-col justify-center items-center h-full gap-4'>
                    <h1 className="animate__animated animate__slideInDown animate__slow font-berkshire font-semibold text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
                    Discover Your Perfect Aesthetic
                </h1>
                <p className="text-base mt-2 max-w-xl">Transform your space with our premium collection of stylish and modern tiles. Find the perfect design that reflects your personality and enhances every corner of your home.</p>

                <Link href="/all-tiles"><Button className='bg-[#198c19] hover:bg-transparent hover:border border-[#198c19] transition duration-300' >
                    Browse Now
                </Button></Link>
            </div>

            </section>
        </>
    );
};

export default Hero;