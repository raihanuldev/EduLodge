import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user,logout} = useContext(AuthContex);


    const items = <>
        <li className="text-xl font-semibold"><Link to='/'>Home</Link></li>
        <li className="text-xl font-semibold"><Link to='/'>Collages</Link></li>
        <li className="text-xl font-semibold"><Link to='/'>Admission</Link></li>
        <li className="text-xl font-semibold"><Link to='/'>My Collage</Link></li>
        
        {
            user? <> <li className="text-xl font-semibold"><Link to={`/profile/${user?.email}`}>{user.displayName}</Link></li> <li className="text-xl font-semibold"><Link onClick={logout}>Logout</Link></li> </> : <li className="text-xl font-semibold"><Link to='/login'>Login</Link></li>
        }
        {/* If user not available then show login button otherwise show Full Name + Logout Button */}
    </>
    return (
        <div className="navbar bg-base-200 shadow-md px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">EduLodge</a>
                <div className="flex">
                    <input type="text" className="input" placeholder="Search Collage Name" />
                    <button className="btn btn-primary ml-2"> <FaSearch></FaSearch> </button>
                </div>
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