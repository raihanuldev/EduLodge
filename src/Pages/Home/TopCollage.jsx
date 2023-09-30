import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Collage from '../Collages/Collage';

const TopCollage = () => {
    const [defultCollage, setDefult] = useState([]);
    const [searchFiled, setSearchFiled] = useState('');
    const [searchData, setSearchData] = useState([])

    const handleSearch = () => {
        // Fetch data based on the search field value
        fetch(`https://collage-server-two.vercel.app/search-collages?query=${searchFiled}`)
            .then(res => res.json())
            .then(data => {
                setSearchData(data);
            });
    }

    useEffect(() => {
        fetch('https://collage-server-two.vercel.app/all-collages')
            .then(res => res.json())
            .then(data => {
                setDefult(data)
            })
    }, [])
    return (
        <div className=''>
            <div className="flex w-2/3 mx-auto">
                <input type="text" onChange={(e) => setSearchFiled(e.target.value)} className="input my-4 w-full bg-[#bfcdda] " placeholder="Search Collage Name" />
                <button onClick={handleSearch} className="btn btn-outline ml-2 mt-4"> <FaSearch></FaSearch> </button>
            </div>
            <h2 className='text-center text-3xl font-semibold'>Top Collage</h2>
            <div className='grid md:grid-cols-2'>
                {
                    // Display search results if available, otherwise display defaultCollage
                    (searchData.length > 0 ? searchData : defultCollage)
                        .map((collage, index) => <Collage key={index} collage={collage}></Collage>)
                        .slice(0, 3)
                }
            </div>
        </div>
    );
};

export default TopCollage;