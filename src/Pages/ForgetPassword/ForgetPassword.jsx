import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const {resetPass} = useContext(AuthContex);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
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
            <div className='card-body bg-base-200 '>
                <div className="form-control w-1/4 text-center justify-center">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <button className='btn btn-sm btn-outline w-1/4'>Reset Password</button>
            </div>
        </form>
    );
};

export default ForgetPassword;