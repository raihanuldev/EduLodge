import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const EditProfile = () => {
    useTitle('Edit-Profile')
    const { register, handleSubmit } = useForm();
    const { user, loading } = useContext(AuthContex);
    const [profile, setProfile] = useState();
    console.log(profile);

    const onSubmit = data => {
        console.log(data);
        const updatedProfile = {
            ...profile,
            name: data.name || profile.name,
            photoUrl: data.photo || profile.photoUrl,
            email: data.email || profile.email,
            address: data.address || profile.address,
            university: data.university || profile.university,
        };
        // Send PUT request to update the user profile
        fetch(`https://collage-server-two.vercel.app/user/${profile._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                // Handle the response data as needed (e.g., show success message)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Profile Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                // Handle the error and show an error message to the user
                console.error('Error updating profile:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while updating the profile!',
                });
            });
    };

    useEffect(() => {
        fetch(`https://collage-server-two.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })
    }, [user])
    return (
        <div className="bg-[#a7d0f7] mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">

            <p className="text-3xl ">Update Your Informations</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input  {...register("name")} type="text" placeholder={profile?.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input  {...register("photo")} type="text" placeholder="Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email")} type="email" readOnly placeholder={profile?.email || "Add email"} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input  {...register("address")} type="text" placeholder={profile?.address || "Add address"} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input  {...register("university")} type="text" placeholder={profile?.university || "Add University"} className="input input-bordered" />
                    </div>


                    <button className="btn btn-secondary">Update Information</button>
                </div>

            </form>

        </div>
    );
};

export default EditProfile;