import { useContext } from "react";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AuthContex } from "../../Provider/AuthProvider";

const Social = () => {
    const {googleSign} = useContext(AuthContex);
    const handleGoogle =()=>{
        googleSign()
        .then(data=>{
            console.log(data.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="divider mt-0"></div>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-outline btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline btn-circle text-2xl ml-2">
                    <FaFacebookSquare></FaFacebookSquare>
                </button>
            </div>
        </div>
    );
};

export default Social;