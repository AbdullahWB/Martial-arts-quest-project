import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from './Container';

const Footer = () => {
    return (
        <div className='bg-secondary py-[150px]'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-32'>
                    <div className=''>
                        <h1 className='md:text-6xl text-4xl text-white font-bold mb-10'>Subscribe To Our Newsletter</h1>
                        <p className='text-xl text-[#b3b3b3] pr-[30%] tracking-wider'>Don't miss out on this opportunity to stay connected with our vibrant martial arts community. Subscribe to our newsletter today and be part of an amazing network of like-minded individuals passionate about martial arts, personal growth, and unforgettable summer experiences.</p>
                    </div>
                    <div className=''>
                        <div className="card w-full bg-white md:px-32 md:py-10 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <input type="text" placeholder="Your Email" className="input input-bordered w-full rounded-full shadow-xl" />
                                <input type="submit" value="Subscribe Now" className="input input-bordered w-full rounded-full bg-primary text-white font-medium text-xl mt-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-5 grid-cols-1 gap-8 text-white mb-32'>
                    <div className='flex flex-col gap-4'>
                        <Link to='/' className="normal-case text-xl">
                            <div className='flex md:flex-row items-center'>
                                <img width='100' height='100' src="https://i.ibb.co/FbFzwxM/4425949-2411-removebg-preview.png" alt="" />
                                <p className='text-3xl font-bold text-white'>Martial Arts Quest</p>
                            </div>
                        </Link>
                        <p className='pr-12'>Stay up to date with the latest news, events, and special offers from our martial arts summer camp by subscribing to our newsletter</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-3xl font-bold'>About Us</h1>
                        <Link to='/' className='text-xl '>Our Team</Link>
                        <Link to='/' className='text-xl '>Gallery</Link>
                        <Link to='/' className='text-xl '>Milestone</Link>
                        <Link to='/' className='text-xl '>Support</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-3xl font-bold'>Service</h1>
                        <Link to='/' className='text-xl '>Transaction</Link>
                        <Link to='/' className='text-xl '>Contact</Link>
                        <Link to='/' className='text-xl '>Payment</Link>
                        <Link to='/' className='text-xl '>Faq</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-3xl font-bold'>Further Information</h1>
                        <Link to='/' className='text-xl '>OLegal Info</Link>
                        <Link to='/' className='text-xl '>Privacy Policy</Link>
                        <Link to='/' className='text-xl '>Terms & Condition</Link>
                        <Link to='/' className='text-xl '>Support</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-white text-3xl font-bold'>Contact Us</h1>
                        <Link to='/' className='text-xl  flex items-center gap-2'><FaPhone></FaPhone> Our Team</Link>
                        <Link to='/' className='text-xl  flex items-center gap-2'><FaEnvelope></FaEnvelope>Gallery</Link>
                        <div className='flex gap-3 text-3xl text-primary'>
                            <FaFacebook></FaFacebook>
                            <FaYoutube></FaYoutube>
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>
                </div>
                <div>
                    <footer className="footer footer-center p-4 text-white text-3xl">
                        <div>
                            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                        </div>
                    </footer>
                </div>
            </Container>
        </div>
    );
};

export default Footer;