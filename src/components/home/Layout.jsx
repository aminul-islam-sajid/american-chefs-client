import React from 'react';

const Layout = () => {
    return (
        <div>
            <div className="bg-cover bg-no-repeat h-screen w-screen sm:h-auto sm:w-auto sm:bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w')" }}>
                <div className="p-10 sm:p-20">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white p-44">This is an American chef</h2>
                </div>
            </div>
        </div>
    );
};

export default Layout;
