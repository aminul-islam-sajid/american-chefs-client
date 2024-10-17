import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
          }

        console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                const createUser = result.user;
                console.log(createUser);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Registration now</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                            </div>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    Registration
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="p-4 ps-6">
                        <a>
                            Already Have an account? please <Link to="/login" className="text-green-800">Login!</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
