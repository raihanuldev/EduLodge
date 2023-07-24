import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContex } from '../../../../Provider/AuthProvider';

const ResearchDetails = () => {
    const {loading} = useContext(AuthContex);
    const location = useLocation();
    console.log(location);
    const {content,image,author} =location.state;
    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
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