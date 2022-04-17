import React from 'react';
import myself from '../../images/About/Myself.jpg'

const About = () => {
    return (
        <div className='App container mt-3'>
            <img style={{width:'250px', height:'300px'}} src={myself} alt="" />
            <h3 className='mt-2'>Md Faisal Karim</h3>
            <p className='text-start'>I am a university student. I study at computer science and technology in Changsha University of Science and Technology, China. In the beginning of this year I started learning web-developing. Hopefully, I will a web-developer within this year.</p>
            <p className='text-start'>My goals are learning web-developing, learning C++ programming language and doing atlest 200 problem solving via C++ programming language.</p>
            <p className='text-start'>To achieve my goals I spend atleast 8 hours in a day. Because I know one thing which is there is no way to find our goals except hard work.</p>
            <h5 className='text-bold text-primary'>Through hard work, perseverance and a faith in God, you can live your dreams.</h5>
        </div>
    );
};

export default About;