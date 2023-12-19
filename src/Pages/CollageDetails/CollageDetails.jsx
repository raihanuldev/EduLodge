import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AuthContex } from '../../Provider/AuthProvider';
import Rating from 'react-rating';

const CollageDetails = () => {
    const { loading } = useContext(AuthContex);
    const { id } = useParams();
    const [collage, setCollage] = useState(null);


    useEffect(() => {
        fetch(`https://collage-server-two.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setCollage(data);
            })
    }, [id])
    if (loading || collage === null) {
        return <span className="loading loading-bars loading-md"></span>;
    }

    const { image, collegeName, admissionDates, ratings, research, _id, process, events, works, researchHistory, sports, } = collage;
    return (
        <div className='bg-[#c6e4ff] m-2 rounded-lg p-2'>
            <h2 className='text-2xl font-serif font-semibold text-center'>More Details About {collegeName}</h2>
            <div className='grid md:grid-cols-2'>
                <img src={image} className='mx-[70px] sm:mx-5' alt="" />
                <div>
                    <h2 className='text-2xl font-semibold mt-4'>Collage Name: {collegeName}</h2>
                    <p>Our Research Paper: {research}</p>
                    <p>Admission Date : {admissionDates}</p>
                    <p className="text-xl">
                        <Rating
                            placeholderRating={ratings}
                            readonly
                            emptySymbol={<img src="https://cdn0.iconfinder.com/data/icons/hippicons-nature/64/star-o-512.png" className="icon w-[25px] bg-base-200" />}
                            placeholderSymbol={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Y3fYBiHbNme4YA2IMD8EsakkxiMXc-0JQ&usqp=CAU" className="icon w-[25px] bg-base-200" />}
                            fullSymbol={<img src="assets/images/star-yellow.png" className="icon bg-base-200" />}
                        /> <span className='text-xl font-semibold'>{ratings}</span>
                    </p>
                </div>
            </div>
            <div>
                <h2 className='text-xl mt-2 font-mono'>Our Admission Process.</h2>
                <p className='font-thin'>• {process[0]}</p>
                <p className='font-thin'>• {process[1]}</p>
                <p className='font-thin'>• {process[2]}</p>
                <p className='font-thin'>• {process[3]}</p>
                <p className='font-thin'>• {process[4]}</p>
                <p className='font-thin'>• {process[5]}</p>
                <p className='font-thin'>• {process[6]}</p>
                <p className='font-thin'>• {process[7]}</p>
                <p className='font-thin'>• {process[8]}</p>
            </div>
            <div>
                <h2 className='text-xl font-mono mt-2'>Our Event Details</h2>
                <p>• {events[0]}</p>
                <p>• {events[1]}</p>
                <p>• {events[2]}</p>
                <p>• {events[3]}</p>
            </div>
            <div>
                <h2 className='text-xl font-mono mt-2'>Our Sports Categories</h2>
                <p>• {sports[0]}</p>
                <p>• {sports[1]}</p>
                <p>• {sports[2]}</p>
                <p>• {sports[3]}</p>
                <p>• {sports[4]}</p>

            </div>
            <div>
                <h2 className='text-xl font-mono mt-2'>Our Research History</h2>
                <p>{researchHistory}</p>
            </div>
            <div>
                <h2 className='text-xl font-mono mt-2'>Our Recent Work Research</h2>
                <div>
                    {
                        works.map((work, index) => <div key={index} className="card lg:card-side bg-base-100 shadow-xl my-2 ">
                            <figure><img src={work.img} className='my-3 w-[318px]' alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{work.title}</h2>
                                <p>{work.summary.slice(0, 400)} .....</p>

                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default CollageDetails;