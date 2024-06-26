import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>career</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="flex navbar-end gap-4 my-2">
                <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user?.photoURL ?
                            <img src={user.photoURL} alt="" />
                            :
                            <FaRegUserCircle className="w-full h-full"></FaRegUserCircle>
                        }
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="text-white font-bold px-8 bg-black py-2 ">Sign Out</button>
                        :
                        <Link to={'/login'}>
                            <button className="text-white font-bold px-8 bg-black py-2 ">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;