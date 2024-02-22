import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const CustomLoader = () => {
    console.log('CustomLoader mounted');
    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

export default CustomLoader;




