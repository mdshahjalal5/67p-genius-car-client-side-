import React from 'react';
import  personAny from '../../../assets/images/about_us/person.jpg'
import  parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <>
            <h2 className='text-center text-2xl text-red-500 mb-3'>About us</h2>
            <div className="hero ">
                <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                    <div className="max-w-sm rounded-lg w-1/2 shadow-2xl relative">
                        <img src={personAny} alt="" className='rounded-lg' />
                        <img src={parts} alt="" className='absolute top-1/2 left-1/2 w-3/4 rounded-md' />
                    </div>

                    <div className='w-1/2 mt-9'>
                        <h1 className="text-5xl font-bold">We are qualified
                            & of experience
                            in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />

                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                 
                </div>
            </div>
        </>
    );
};

export default About;