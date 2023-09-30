import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user,logout} = useContext(AuthContex);
    const [profile,setProfile] = useState();

    useEffect(()=>{
        fetch(`https://collage-server-two.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })
    }, [user])
    const items = <>
        <li className="text-xl font-semibold"><Link to='/'>Home</Link></li>
        <li className="text-xl font-semibold"><Link to='/collages'>Collages</Link></li>
        <li className="text-xl font-semibold"><Link to='admission/'>Admission</Link></li>
        <li className="text-xl font-semibold"><Link to='/my-collages'>My Collage</Link></li>
        
        {
            user? <> <li className="text-xl font-semibold"><Link to={'/profile'}>{profile?.name}</Link></li> <li className="text-xl font-semibold"><Link onClick={logout}>Logout</Link></li> </> : <li className="text-xl font-semibold"><Link to='/login'>Login</Link></li>
        }
        {/* If user not available then show login button otherwise show Full Name + Logout Button */}
    </>
    return (
        <div className="navbar bg-[#7ab6ee] shadow-md px-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-serif">EduLodge</a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;