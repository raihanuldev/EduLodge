import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import Collage from './Collage';
import useTitle from '../../hooks/useTitle'

const Collages = () => {
    useTitle('Collages || EduLodge')
    const { loading } = useContext(AuthContex)
    const [collages, setCollages] = useState(null) 

    useEffect(() => {
        fetch('https://collage-server-two.vercel.app/all-collages')
            .then(res => res.json())
            .then(data => {
                setCollages(data)
            })
    }, [])

    if (loading || collages === null) {
        return <span className="loading loading-bars loading-md"></span>
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