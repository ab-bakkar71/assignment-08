import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
          <HashLoader  color='#198c19'/>
        </div>
    );
};

export default loading;