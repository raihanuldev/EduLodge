import React from 'react';
import { Link } from 'react-router-dom'

const SImpleCollage = ({ collage, index }) => {
    
    const { collegeName,_id } = collage || [];
    
    return (
        <div className="card lg:card-side bg-[#cbe6ff] shadow-xl my-2 mx-4">
            <div className="card-body">
                <h2 className="card-title text-2xl">{collegeName}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/collage-admission/${_id}`} state={collage} className="btn btn-primary ">Apply</Link>
                </div>
            </div>
        </div>
    );
};

export default SImpleCollage;