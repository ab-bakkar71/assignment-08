import React from 'react';

const TilesId = async({params}) => {
    const {id} = await params;

    return (
        <div>
            Tia{id}
        </div>
    );
};

export default TilesId;