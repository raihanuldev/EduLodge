import React, { useContext, useEffect, useState } from 'react';
import {AuthContex} from '../../Provider/AuthProvider'
import SImpleCollage from './SimpleCollage/SImpleCollage';
import useTitle from '../../hooks/useTitle'

const Admission = () => {
    useTitle('Admission || EduLodge')
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
            <h2 className='text-2xl font-serif font-semibold text-center my-3'>Apply for Admission Your choose</h2>
            <div>
                {collages.map((collage,index)=> <SImpleCollage index={index} key={index} collage={collage}></SImpleCollage>)}
            </div>
        </div>
    );
};

export default Admission;