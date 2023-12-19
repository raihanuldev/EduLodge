import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { useParams ,useNavigate, useLocation } from "react-router-dom";
import { AuthContex } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Apply = () => {
    const locations = useLocation();
    const collage = locations.state;
    console.log(collage);
    const navigate = useNavigate();
    const {user,loading} = useContext(AuthContex);
    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    const onSubmit =(data)=>{
        const application = {collageId:id, collageInfo:collage, name:data.names,address:data.address,photo:data.photo, birth:data.birthdate, subject:data.subject,email:data.email,phone:data.phone};
        // console.log(application);
        fetch('https://collage-server-two.vercel.app/admissions',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(application)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Application Submit Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            }
        })
    }
    
    return (
        <div className="bg-base-200 mx-auto sm:w-2/3 p-5 my-4 rounded-3xl">
            <p className='text-3xl font-mono text-center'>Applying For Admission </p>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <input  {...register("names", { required: true })} type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input  {...register("subject", { required: true })} type="text" placeholder="Subject" className="input input-bordered" />
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
                        <input  {...register("email", { required: true })} value={user?.email} readOnly type="email" placeholder="email-Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input  {...register("phone", { required: true })} type="number" placeholder="Phone-Number" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input  {...register("address", { required: true })} type="text" placeholder="Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input  {...register("birthdate", { required: true })} type="date" placeholder="date of Birth" className="input input-bordered" />
                    </div>
                    
                    
                    <button className="btn btn-secondary">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Apply;