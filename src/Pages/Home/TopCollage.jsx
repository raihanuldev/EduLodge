import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Collage from '../Collages/Collage';

const TopCollage = () => {
    const [defultCollage,setDefult] = useState([]);
    const [searchFiled,setSearchFiled] = useState('');

    const handleSearch =()=>{
        console.log(searchFiled);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/all-collages')
            .then(res => res.json())
            .then(data => {
                setDefult(data)
            })
    },[])
    return (
        <div>
            <div className="flex w-2/3 mx-auto">
                <input type="text" onChange={(e) => setSearchFiled(e.target.value)} className="input my-4 w-full bg-base-200" placeholder="Search Collage Name" />
                <button onClick={handleSearch}  className="btn btn-outline ml-2 mt-4"> <FaSearch></FaSearch> </button>
            </div>
            <h2 className='text-center text-3xl font-semibold'>Top Collage</h2>
            <div className='grid md:grid-cols-2'>
                {
                    defultCollage.map((collage,index)=> <Collage key={index} collage={collage}></Collage>).slice(0,3)
                }
            </div>
        </div>
    );
};

export default TopCollage;