import Image from 'next/image';
import React from 'react';

const tilesDetailsPage = async ({ params }) => {
    const { tilesId } = await params;
    const rse = await fetch("http://localhost:3000/tiles.json");

    const tiles = await rse.json();
    const tile = tiles.find(t => t.id === tilesId)
    console.log(tile);
    return (
        <>
            <iv className="flex flex-col md:flex-row items-center rounded-sm gap-10 bg-white shadow-md max-md:max-w-80 my-15">
                <div>
                    <Image className='object-cover w-full max-h-[60vh] rounded-l-sm'
                        src={tile.image}
                        alt={tile.title}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-6xl font-bold text-slate-800">{tile.title}</h3>
                        
                    </div>
                    <p className=" text-2xl my-4 text-slate-500">{tile.description}</p>
                    {
                            tile.inStock === true ? <span className="px-3 py-1 bg-green-500 text-white rounded text-sm">Available</span> : <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">stock-out</span>
                        }

                    <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                        <span className="text-gray-600 font-medium">PRICE:</span>
                        <span className="text-gray-800">${tile.price}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                        <span className="text-gray-600 font-medium">CATEGORY</span>
                        <span className="text-gray-800">${tile.category}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                        <span className="text-gray-600 font-medium">DIMENSIONS:</span>
                        <span className="text-gray-800">${tile.dimensions}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-2">
                        <span className="text-gray-600 font-medium">MATERIAL</span>
                        <span className="text-gray-800">${tile.material}</span>
                    </div>
                    



                    <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
                        Add to cart
                    </button>
                </div>
            </iv>
        </>
    );
};

export default tilesDetailsPage;