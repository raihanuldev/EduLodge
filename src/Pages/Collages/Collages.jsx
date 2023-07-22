import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import Collage from './Collage';

const Collages = () => {
    const { loading } = useContext(AuthContex)
    const [collages, setCollages] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:5000/all-collages')
            .then(res => res.json())
            .then(data => {
                setCollages(data)
            })
    }, [])

    if (loading) {
        return <div>Loading..........</div>
    }

    return (
        <div>
            {
                collages.map((collage,index)=> <Collage key={index} collage={collage}></Collage>)
            }
        </div>
    );
};

export default Collages;