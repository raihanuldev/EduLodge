import React from 'react';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {
    const { name, image, date, feedback ,ratings} = review || {};
    return (
        <div className="card w-96 bg-[#98cdff] shadow-xl">
            <div className="card-body">
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="text-xl">
                    <Rating
                        placeholderRating={ratings}
                        readonly
                        emptySymbol={<img src="https://cdn0.iconfinder.com/data/icons/hippicons-nature/64/star-o-512.png" className="icon w-[25px]" />}
                        placeholderSymbol={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Y3fYBiHbNme4YA2IMD8EsakkxiMXc-0JQ&usqp=CAU" className="icon w-[25px]" />}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    /> <span className='text-xl font-semibold'>{ratings}</span>
                </p>
                <p>{feedback}</p>

            </div>
        </div>
    );
};

export default ReviewCard;