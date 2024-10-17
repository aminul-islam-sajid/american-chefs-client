import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className='text-center text-7xl  font-extrabold p-4'>Blog</h2>
            </div>


            <div className='p-16 ms-80'>
                <h2 className='font-bold text-2xl'>1.How to validate React props using PropTypes?</h2>
                <p><span className='font-extrabold'>Ans : </span> A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.</p>

                <h2 className='font-bold my-2'>2.What is the difference between nodejs and express js?</h2>
                <p><span className='font-extrabold'>Ans : </span> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</p>

                <h2 className='font-bold my-2'>3.What is a custom hook, and why will you create a custom hook?</h2>
                <p><span className='font-extrabold'>Ans : </span>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
                <h2 className='font-bold my-2'>4.What is differences between uncontrolled and controlled components?</h2>
                <p><span className='font-extrabold'>Ans : </span>Controlled components in React are those in which form data is handled by the component’s state.Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;