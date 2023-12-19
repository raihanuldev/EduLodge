import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    const [papers, setPaper] = useState([]);
    useEffect(() => {
        fetch('https://collage-server-two.vercel.app/research-papers')
            .then(res => res.json())
            .then(data => {
                setPaper(data)
            })
    }, [])
    if (papers === null) {
        return <div>
            <span className="loading loading-dots loading-md"></span>
        </div>
    }
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold font-mono my-3'>Research Paper Latest Published</h2>
            <div className='grid md:grid-cols-4 gap-2'>
                {
                    papers.map((paper, index) => <div className='bg-[#cbe6ff]' key={index}>
                        <Link to={`/research-paper/${paper._id}`} state={paper}><img className='w-72 h-50 card' src={paper.image} alt="" /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Research;