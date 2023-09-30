import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle'

const ForgetPassword = () => {
    useTitle('Forget Password || EduLodge')
    const {resetPass} = useContext(AuthContex);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.email);
        resetPass(data.email)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Reset Email Sent Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='card-body bg-[#9dc1e4] md:w-1/4 mx-auto my-5 rounded-2xl '>
                <div className="form-control text-center justify-center">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <button className='btn btn-sm btn-outline'>Reset Password</button>
            </div>
        </form>
    );
};

export default ForgetPassword;