import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='font-extrabold text-4xl my-7 text-center'>About page</h2>
            <div className='mx-48'>
                <p>
                    As a programming student, I am passionate about exploring the world of technology and creating innovative solutions to real-world problems. From a young age, I was always fascinated by computers and how they work, and this curiosity has only grown over time. I am driven by the endless possibilities that programming offers and the ability to bring my ideas to life through code.</p>
                <br />
                <p>
                    I am currently pursuing a degree in computer science, where I am learning the fundamental concepts of programming and software development. Through my coursework, I have gained a solid foundation in programming languages such as Java, Python, and C++, as well as data structures and algorithms. I am constantly challenging myself to learn more and stay up-to-date with the latest developments in the field.</p>
                <br />
                <p>
                    In addition to my academic pursuits, I am also actively involved in programming communities and hackathons. These experiences have given me the opportunity to work with other like-minded individuals and collaborate on exciting projects. I enjoy the process of brainstorming ideas, designing the architecture, and implementing the solution. These experiences have not only improved my technical skills but also helped me develop strong communication and teamwork abilities.
                </p>
                <br />
                <p>
                    One of the areas I am most interested in is artificial intelligence and machine learning. I am intrigued by the idea of creating intelligent systems that can learn and adapt to new situations. I believe that AI has the potential to transform many industries, and I am excited to be a part of this revolution.
                </p>
                <br />
                <p>
                    Outside of programming, I enjoy staying active through sports such as basketball and hiking. I find that these activities provide a much-needed break from the screen and help me stay balanced. I also enjoy reading books about technology and innovation and staying up-to-date with the latest news in the tech industry.
                </p>
                <br />
                <p>
                    Overall, as a programming student, I am constantly seeking new challenges and opportunities to learn and grow. I am excited about the future and the endless possibilities that programming holds. I believe that with hard work and dedication, I can achieve great things and make a positive impact in the world of technology.
                </p>
            </div>
            <h2 className='text-2xl font-bold ms-24 p-8'>Thanks...!</h2>
            <Footer></Footer>
        </div>
    );
};

export default About;