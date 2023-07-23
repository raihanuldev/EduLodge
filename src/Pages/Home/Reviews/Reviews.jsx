import React, { useContext, useEffect, useState } from 'react';
import {AuthContex} from '../../../Provider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
const Reviews = () => {
    const {loading} = useContext(AuthContex);
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    if(loading || reviews===null){
        return <p>loading</p>
    }
    return (
        <div className='px-5'>
            <h2 className='text-4xl text-center font-serif font-semibold my-2'>Our Feedback</h2>
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    reviews.map((review,index)=> <ReviewCard key={index} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;