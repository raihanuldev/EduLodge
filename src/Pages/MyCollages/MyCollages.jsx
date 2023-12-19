import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import Rating from 'react-rating';
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle'

const MyCollages = () => {
    useTitle('My Collage')
    const { user, loading } = useContext(AuthContex)
    const [application, setApplications] = useState({});
    const [feedback, setFeedback] = useState(''); // State to store the value of the textarea

    const [rating, setRating] = useState(3);
    const { collageId, name, phone, subject, collageInfo, address } = application;
    const handleFeedback = () => {
        const review = { name: user?.displayName, feedback: feedback, image: user?.photoURL, ratings: rating }
        // console.log(review);
        fetch('https://collage-server-two.vercel.app/reviews', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    useEffect(() => {
        fetch(`https://collage-server-two.vercel.app/applications?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setApplications(data);
            })
    }, [user])

    if (loading || Object.keys(application).length === 0) {
        // If application data is empty or still loading, show a loading message
        return <div>
            <span className="loading loading-bars loading-md"></span>
            <p className='text-2xl'>Still Are You Selected any Collage?</p>
        </div>;
    }
    return (
        <div className='px-5'>
            <h2 className='text-3xl font-mono text-center my-3'>My Collage</h2>
            {Object.keys(application).length === 0 ? (
                // If application data is still empty, show a message
                <h3>No Data Found! Please Wait, Or Select Collage</h3>
            ) : (
                // Otherwise, show the collage information and feedback section
                <div>
                    {/* <h2 className='text-3xl font-mono text-center my-3'>My Collage</h2> */}
                    <div>
                        <img className='mx-auto rounded-lg' src={collageInfo?.image} alt="Collage Image" />
                    </div>
                    <div className='my-3'>
                        <p className='text-1xl  font-semibold'>Collage Id: <span className='text-1xl font-sans'>{collageId}</span> </p>
                        <p className='text-1xl  font-semibold'>Your Are Student Of: <span className='text-1xl font-sans'>{subject}</span> </p>
                        <p className='text-1xl  font-semibold'>Collage Name: <span className='text-1xl font-sans'>{collageInfo?.collegeName}</span> </p>
                        <p className='text-1xl  font-semibold'>Location: <span className='text-1xl font-sans'>United State</span> </p>
                        <p className='text-1xl  font-semibold'>Number of Research: <span className='text-1xl font-sans'>{collageInfo?.research}</span> </p>
                        <p className='text-1xl  font-semibold'>Sports : <span className='text-1xl font-sans'>{collageInfo?.sports[0]},{collageInfo?.sports[1]},{collageInfo?.sports[2]}</span> </p>
                    </div>
                    <div className='bg-base-200 rounded-lg p-3'>
                        <p className='py-2 text-3xl'>Leave A Review About Your Collage</p>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            isRequired
                            onChange={setRating}
                            emptySymbol={<BsStar className='w-7 h-10'></BsStar>}
                            placeholderSymbol={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Y3fYBiHbNme4YA2IMD8EsakkxiMXc-0JQ&usqp=CAU" className="icon w-[25px]" />}
                            fullSymbol={<BsStarFill className='w-7 h-10 text-red-400'></BsStarFill>}
                        />
                        <div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <button className='btn btn-sm btn-outline' onClick={handleFeedback}>
                                Add Feedback
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCollages;