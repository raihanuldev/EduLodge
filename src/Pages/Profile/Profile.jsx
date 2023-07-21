import { useContext, useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Profile = () => {
    const {user,loading} = useContext(AuthContex);
    useEffect(()=>{
        // okey 
    },[])
    if(loading){
        return <div>loading..........</div>
    }
    return (
        <div>
            <h2>{user.email}</h2>
        </div>
    );
};

export default Profile;