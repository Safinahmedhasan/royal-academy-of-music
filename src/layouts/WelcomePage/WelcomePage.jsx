
import React, { useEffect } from 'react';
import Container from '../../component/shared/Container/Container ';
import { Fade } from 'react-awesome-reveal';


const WelcomePage = () => {

    return (
        <div className='md:mt-20 mt-10'>
            <Container>
                <Fade direction="up" delay={500} triggerOnce>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='md:w-1/2 '>
                        <img className='rounded-xl' src="https://i.ibb.co/N6BvBdB/1543404545-Music-School-For-Kids-In-Noida-kidsstoppress.png" alt="" />
                    </div>
                    <div className='md:w-1/2 md:ml-10' >
                        <h2 className='md:text-5xl text-3xl mt-10 md:mt-0 mb-5 text-green-500 font-bold'>Welcome to Our Music School</h2>
                        <p>At our music school, we offer comprehensive music education for students of all ages and skill levels. Whether you're a beginner looking to explore your musical talents or an advanced musician aiming to refine your skills, we have a diverse range of programs and experienced instructors to guide you on your musical journey. With our state-of-the-art facilities and a supportive learning environment, we strive to create a nurturing space where students can develop their musical abilities, foster creativity, and cultivate a lifelong love for music. Join us and unlock your potential in the world of music!</p>
                    </div>
                </div>
                </Fade>
            </Container>

        </div>
    );
};

export default WelcomePage;