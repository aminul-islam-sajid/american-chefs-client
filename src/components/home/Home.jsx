import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Layout from './Layout';
import HomePage from './HomePage';
import HomeExtra_1 from './HomeExtra_1';


const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Navbar></Navbar>
            <Layout></Layout>
           <HomePage></HomePage>
            <HomeExtra_1></HomeExtra_1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;