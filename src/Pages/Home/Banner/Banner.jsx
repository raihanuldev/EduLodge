import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='m-5 h-[500px] rounded-lg'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-lg' src="https://www.timeshighereducation.com/student/sites/default/files/university_of_toronto_1_1.jpg" alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img className='rounded-lg' src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-09/harvard-university-campus.jpg?itok=SK_1MUqi" alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img className='rounded-lg' src="https://www.timeshighereducation.com/student/sites/default/files/istock-803302864.jpg" alt="" />
                </SwiperSlide>
                
                
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;