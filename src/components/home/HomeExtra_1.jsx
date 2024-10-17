import React, { useEffect, useState } from 'react';

const HomeExtra_1 = () => {
    const date = new Date();
    const [totalViews, setTotalViews] = useState(0);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date()); // Update the current time every second
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Format hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Update view count using localStorage
    useEffect(() => {
        // Get the current view count from localStorage or start with 888000
        const storedViews = localStorage.getItem('totalViews');
        const views = storedViews ? parseInt(storedViews) : 888000;

        // Increment the view count
        const updatedViews = views + 1;
        setTotalViews(updatedViews);

        // Save the updated view count back to localStorage
        localStorage.setItem('totalViews', updatedViews);
    }, []);

    return (
        <div className='flex flex-row space-x-96 font-bold text-4xl p-24  my-4 rounded text-green-800'>
            <h2 className='ms-24'>Year <span className='text-red-800'>{date.getFullYear()}</span> </h2>
            {/* Display the total views from localStorage */}
            <h2>Total view <span className='text-red-800'>{totalViews.toLocaleString()}</span></h2>
            <h2>Local Time: <span className='text-red-800'>{hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span></h2>
        </div>
    );
};

export default HomeExtra_1;
