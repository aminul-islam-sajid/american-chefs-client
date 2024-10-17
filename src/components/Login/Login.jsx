import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
    const { signIn, google, gitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; // Redirect to home after login

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true }); // Redirect to home
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handelGoogleSignIn = () => {
        google()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true }); // Redirect to home
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handelGithubSignIn = () => {
        gitHub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true }); // Redirect to home
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-6">
                                <button className="btn btn-primary">Login</button>
                                <div className="p-4 ps-6">
                                    <p>Don't have an account yet? <Link to="/registration" className="text-green-800">Create an account</Link></p>
                                </div>
                                <button onClick={handelGoogleSignIn} className="btn btn-outline btn-success text-black font-bold my-2">
                                    Log in with Google
                                </button>
                                <button onClick={handelGithubSignIn} className="btn btn-outline btn-error text-black font-bold px-16">
                                    Log in with GitHub
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
