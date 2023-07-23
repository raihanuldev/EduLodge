import React from 'react';
import { useLocation } from 'react-router-dom';

const ResearchDetails = () => {
    const location = useLocation();
    console.log(location);
    const {content,image,author} =location.state;
    return (
        <div className='px-5'>
            <img className='mx-auto' src={image} alt="" />
            <div>
                <p className='text-3xl font-semibold font-mono'>Author: {author}</p>
                <p className='text-2xl '>{content}</p>
            </div>
        </div>
    );
};

export default ResearchDetails;