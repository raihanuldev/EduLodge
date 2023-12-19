import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTitle from '../../hooks/useTitle';

const Profile = () => {
    useTitle('Profile || EduLodge')
    const navigate = useNavigate()
    const { user, loading } = useContext(AuthContex);
    const [profile, setProfile] = useState();

    const profileEdit = ()=>{
        navigate('/edit-profile')
    }


    useEffect(() => {
        fetch(`https://collage-server-two.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })
    }, [user])

    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }
    return (
        <div className="bg-[rgb(183,220,255)] mx-4 rounded-lg">
            <p className="text-center text-2xl font-semibold my-2">Welcome to {profile?.name} Profile.</p>
            <div>
                <div className="avatar ml-10 my-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profile?.photoUrl} alt="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                    </div>
                </div>
                <div className="ml-3">
                    <h3 className="text-2xl font-semibold">Full Name: {profile?.name} </h3>
                    <h3 className="text-2xl font-semibold">Email: {profile?.email}</h3>
                    <h3 className="text-2xl font-semibold">University Name: {profile?.university ||"No University Set"}</h3>
                    <h3 className="text-2xl font-semibold">Address: {profile?.address || "No Address added!"} </h3>
                </div>
                <div>
                    <button onClick={profileEdit} className="btn btn-primary btn-sm my-4 ml-4">Edit Profile</button>
                </div>
            </div>
        </div>
    )
};

export default Profile;