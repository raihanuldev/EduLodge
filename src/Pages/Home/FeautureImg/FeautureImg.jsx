import React from 'react';

const FeautureImg = () => {
    return (
        <div className='px-5 rounded-lg'>
            <h2 className='text-4xl font-semibold text-center font-serif my-3'>Feature Image</h2>
            <div className='grid md:grid-cols-3 gap-1'>
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/1139319/pexels-photo-1139319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-72 rounded-lg' src="https://unity.edu/wp-content/uploads/2020/05/graduates-2015_0.jpg" alt="" />
                <img  className='h-72 rounded-lg ' src="https://images.pexels.com/photos/7944238/pexels-photo-7944238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img  className='h-72 rounded-lg' src="https://images.pexels.com/photos/951289/pexels-photo-951289.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/1699414/pexels-photo-1699414.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/1628095/pexels-photo-1628095.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='h-72 rounded-lg' src="https://images.pexels.com/photos/7713245/pexels-photo-7713245.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
};

export default FeautureImg;