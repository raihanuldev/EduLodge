import { useContext } from "react";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AuthContex } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Social = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {googleSign,fbLogin,loading} = useContext(AuthContex);
    const handleGoogle =()=>{
        googleSign()
        .then(data=>{
            const loggedUser = data.user;
            const user = { name: loggedUser.displayName, address:'',university:'',photoUrL:loggedUser.photoURL, email: loggedUser.email,firebase: data.user.metadata}
            fetch('https://collage-server-two.vercel.app/users', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(()=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'SingUp Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(from,{replace:true})
                })
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
    if(loading){
        return <span className="loading loading-bars loading-md"></span>
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