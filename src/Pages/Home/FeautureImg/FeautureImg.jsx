import React from 'react';

const FeautureImg = () => {
    return (
        <div className='px-5 rounded-lg'>
            <h2 className='text-4xl font-semibold text-center font-serif my-3'>Feature Image</h2>
            <div className='grid md:grid-cols-3 gap-1'>
                <img className='h-72 rounded-lg' src="https://www.collegetransitions.com/wp-content/uploads/2014/05/shutterstock_789412672-1200x675.jpg" alt="" />
                <img className='h-72 rounded-lg' src="https://media.istockphoto.com/id/1151567114/photo/a-young-female-graduate-against-the-background-of-university-graduates.jpg?s=612x612&w=0&k=20&c=zAFyR9UEbOWLOXqdNQSItVxVxOrjhOvwkfms-TyigA4=" alt="" />
                <img className='h-72 rounded-lg' src="https://di-uploads-pod5.s3.amazonaws.com/beachautomotivegroup/uploads/2016/03/graduates.jpg" alt="" />
                <img className='h-72 rounded-lg' src="https://unity.edu/wp-content/uploads/2020/05/graduates-2015_0.jpg" alt="" />
                <img  className='h-72 rounded-lg ' src="https://www.bankrate.com/2022/05/09185151/2022-college-graduation-statistics.jpg" alt="" />
                <img  className='h-72 rounded-lg' src="https://www.vsu.edu/files/images/heroes/graduation_male_cap_gown_hero.jpg" />
                <img className='h-72 rounded-lg' src="https://www.dominican.edu/sites/default/files/styles/width_1160/public/2020-02/graduation-registrar-hero.jpg?itok=l3Th9Xa8" />
                <img className='h-72 rounded-lg' src="https://www.athens.edu/wp-content/uploads/2023/04/IMG_4251-scaled-e1681739733424.jpg" alt="" />
                <img className='h-72 rounded-lg' src="https://www.pewresearch.org/wp-content/uploads/2022/04/FT_22.03.29_CollegeGradFacts__feature.jpg?w=640" alt="" />
            </div>
        </div>
    );
};

export default FeautureImg;