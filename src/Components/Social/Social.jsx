import { useContext } from "react";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AuthContex } from "../../Provider/AuthProvider";

const Social = () => {
    const {googleSign,fbLogin} = useContext(AuthContex);
    const handleGoogle =()=>{
        googleSign()
        .then(data=>{
            console.log(data.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleFacebook = ()=>{
        fbLogin()
        .then(data=>{
            console.log(data.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="divider mt-0"></div>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-outline btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleFacebook} className="btn btn-outline btn-circle text-2xl ml-2">
                    <FaFacebookSquare></FaFacebookSquare>
                </button>
            </div>
        </div>
    );
};

export default Social;