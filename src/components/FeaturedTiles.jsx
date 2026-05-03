import React from 'react';
import TilesCard from './TilesCard';

const FeaturedTiles = async () => {
    const rsc = await fetch("http://localhost:3000/tiles.json");
    const featuredTiles = await rsc.json();
    const tiles = featuredTiles.slice(0, 4);


    return (
        <div>
            <h1 className='text-2xl font-bold'>Featured Tiles:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 mt-6'>
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;