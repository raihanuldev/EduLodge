import Rating from "react-rating";
import { Link } from 'react-router-dom'


const Collage = ({collage}) => {
    const {image,collegeName,admissionDates,ratings,research,_id} = collage;
    
    
    return (
        <div className="card sm:mx-5 lg:card-side bg-base-100 my-2 rounded-lg shadow-sm">
                <img src={image} className="p-2 sm:mx-auto w-[318px] "  alt="Album" />
                <div className="card-body ">
                    <h2 className="card-title">{collegeName}</h2>
                    <p className="text-xl">Number Of Research : {research}</p>
                    <p className="text-xl">Admission Date : {admissionDates}</p>
                    <p className="text-xl">Ratings:
                    <Rating
                        placeholderRating={ratings}
                        readonly
                        emptySymbol={<img src="https://cdn0.iconfinder.com/data/icons/hippicons-nature/64/star-o-512.png" className="icon w-[25px]" />}
                        placeholderSymbol={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Y3fYBiHbNme4YA2IMD8EsakkxiMXc-0JQ&usqp=CAU" className="icon w-[25px]" />}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    /> <span className='text-xl font-semibold'>{ratings}</span>
                </p>
                    <div className="card-actions justify-end">
                        <Link to={`/collages/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
    );
};

export default Collage;