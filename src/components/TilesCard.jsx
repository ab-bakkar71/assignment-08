import { Ban, Check, CircleFill } from '@gravity-ui/icons';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TilesCard = ({ tiles }) => {
    return (
        <>
            <div className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 ">
                <div className='relative w-full aspect-square'>
                    <Image
                        src={tiles.image}
                        alt={tiles.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-md">

                    </Image>
                </div>
                <p className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                    {tiles.title}
                </p>
                <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                    {tiles.description}
                </p>
                <div className='ml-2'>
                    {
                        tiles.inStock === true ? <Chip color="success">
                            <Check width={12} />
                            <Chip.Label>Available</Chip.Label>
                        </Chip> : <Chip color="danger">
                            <Ban width={12} />
                            <Chip.Label>stock-out</Chip.Label>
                        </Chip>
                    }
                </div>
                <button type="button" className="bg-[#198c19] hover:bg-[#21b121] transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">
                    Details
                </button>
            </div>
        </>
    );
};

export default TilesCard;