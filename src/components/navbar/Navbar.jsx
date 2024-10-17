import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
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
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">American Chefs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end ">
                {user ? (
                    <div className="flex items-center">
                        <h3 className="mr-4">{user.displayName}</h3>
                        <img className="w-8 h-8 rounded-full" src={user.photoURL} alt={user.displayName} />
                        <button onClick={handleLogout} className="btn ml-4">Logout</button>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;



