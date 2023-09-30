import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../Components/Social/Social";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const SingUp = () => {
    useTitle('SingUp || EduLodge')
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const {createUser,userProfileUpdate} = useContext(AuthContex);
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            // console.log(result);
            userProfileUpdate(data.name,data.photo)
            .then(()=>{
                const user = {name:data.name,address:'',university:'', email:data.email, photoUrl: data.photo,password: data.password,firebase:result.user.metadata}
                fetch('https://collage-server-two.vercel.app/users',{
                            method:'post',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(user)   
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'SingUp Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

            })
        })
        .catch(error =>{
            console.log(error);
        })
        
    };
    return (
        <div className="bg-[#a4c5e4] mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">
            <img src="https://i.ibb.co/s3zpqtF/n-PAR3y23-400x400-removebg-preview.png" alt="techzoxne-1" className='rounded-lg p-5 w-[250px] ' />
            <p className="text-3xl ">Welcome for Joining With Us </p>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input  {...register("name", { required: true })} type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input  {...register("photo", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="email" placeholder="email-Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    
                    <div className="flex">
                        
                        <p className="flex justify-end"><small><Link to='/login'>Already have an Account?</Link></small></p>
                    </div>
                    
                    <button className="btn btn-secondary">Register</button>
                </div>

            </form>
            <Social></Social>
        </div>
    );
};

export default SingUp;