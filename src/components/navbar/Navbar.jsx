import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user.photoURL);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="navbar mx-auto bg-slate-900 text-white">
            {/* Navbar start */}
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">American Chefs</Link>
            </div>

            {/* Navbar center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end flex items-center">
                {user ? (
                    <div className="flex items-center space-x-4">
                        {/* Display user's name */}
                        <h3 className="mr-2">{user?.displayName || 'User'}</h3>

                        {/* Display user's profile image */}
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white"
                            src={user?.photoURL || 'https://via.placeholder.com/40'}  // Fallback image
                            alt={user?.displayName || 'User'}  // Fallback text if user name is unavailable
                        />


                        {/* Logout button */}
                        <button onClick={handleLogout} className="btn btn-sm btn-warning ml-4">Logout</button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-sm btn-primary">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
