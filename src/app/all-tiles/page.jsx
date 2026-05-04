import Search from '@/components/Search';
import TilesCard from '@/components/TilesCard';
import React from 'react';

export const metadata = {
  title: 'The Tile Gallery - All Tiles',
  description: 'Luxurious colorful marble tile that adds a clean and elegant look to any living space.',
}

const allTiles = async ({ searchParams }) => {

    const search = searchParams.search || "";
        const res = await fetch("https://the-tiles-gallery.vercel.app/tiles.json",{
      cache: "no-store",
    });

    // const res = await fetch('http://localhost:3000/tiles.json')
    const tiles = await res.json()


    const searchTiles = search
        ? tiles.filter(tile =>
            tile.title.toLowerCase().includes(search.toLowerCase())
        )
        : tiles;

    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3 my-5'>
                <h1 className='text-2xl font-bold text-left'>All Tiles</h1>
                <div className='w-full md:w-80'>
                    <Search />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 animate__animated animate__fadeIn animate__slow'>
                {search && searchTiles.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">
                        No tiles found
                    </p>
                ) : (
                    searchTiles.map(tile => (
                        <TilesCard key={tile.id} tile={tile} />
                    ))
                )}
            </div>
        </div>
    );
};

export default allTiles;