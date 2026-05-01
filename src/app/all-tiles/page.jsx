import TilesCard from '@/components/TilesCard';
import React from 'react';

const allTiles = async() => {

    const res = await fetch("http://localhost:3000/tiles.json")
    const allTiles = await res.json()
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>All Tiles</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 '>
                {
                    allTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles} ></TilesCard>)
                }
            </div>
        </div>
    );
};

export default allTiles;