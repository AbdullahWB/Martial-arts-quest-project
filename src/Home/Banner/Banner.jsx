import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mb-[150px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src="https://images.pexels.com/photos/14307444/pexels-photo-14307444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl'>
                                    Unlock Your Potential with Martial Arts Training
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our martial arts school, where discipline, focus, and self-improvement are at the core of our training. Whether you are a beginner looking to develop self-defense skills or an experienced practitioner seeking to enhance your martial arts journey, our dedicated instructors are here to guide you every step of the way. Through our comprehensive training programs, you will learn traditional techniques, build physical strength, cultivate mental resilience, and gain invaluable life skills. Join our martial arts community and embark on a transformative journey of personal growth and empowerment. Start your martial arts training today!
                                </p>
                                <div className=''>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://images.pexels.com/photos/7045589/pexels-photo-7045589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Elevate Your Skills with Premier Martial Arts Training
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our premier martial arts school, where excellence and mastery are our guiding principles. Our renowned instructors are dedicated to helping students of all ages and skill levels reach their full potential in the martial arts. Through our dynamic and comprehensive training programs, you will develop not only physical strength and agility but also mental fortitude and self-discipline. Whether you're interested in traditional forms, self-defense techniques, or competitive sparring, our state-of-the-art facilities provide the perfect environment for growth and achievement. Join our martial arts family and embark on a transformative journey of self-discovery and personal empowerment. Experience the transformative power of martial arts today!
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://images.unsplash.com/photo-1514050566906-8d077bae7046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Discover the Way of Martial Arts and Unleash Your Potential
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our martial arts school, where tradition meets innovation. Our dynamic training programs blend ancient martial arts techniques with modern training methodologies to create a transformative learning experience. Whether you're seeking self-defense skills, physical fitness, or personal growth, our expert instructors will guide you on your martial arts journey. Join our vibrant community, embrace the warrior spirit within you, and unlock a world of endless possibilities.
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/vVzj4cX/group-girls-karate-uniforms-777078-15975-removebg-preview.png" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Train with Passion, Learn with Purpose at Our Martial Arts Academy
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    At our martial arts academy, we believe in the power of passion and purpose. Our dedicated instructors are committed to providing a supportive and inspiring environment for students of all ages and abilities. Through disciplined training and personalized guidance, we cultivate self-confidence, respect, and resilience. Whether you're interested in traditional martial arts, modern self-defense techniques, or competitive training, our academy offers a comprehensive curriculum that fosters growth and empowers individuals to become their best selves.
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/fGLt5ZW/full-length-studio-shot-two-women-taekwondo-athletes-training-isolated-black-background.jpg" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Unlock Your Inner Warrior and Embrace the Way of Martial Arts
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    At our martial arts academy, we invite you to discover the warrior within. Our expert instructors blend ancient martial arts traditions with a modern approach to training, providing a well-rounded experience that encompasses self-defense, physical fitness, and personal growth. Through dedicated practice and guidance, you will cultivate mental resilience, sharpen your focus, and develop a strong body and mind. Join our dojo, embrace the path of the warrior, and embark on a transformative journey towards self-mastery.
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/r0YJgLw/karate-fighters.jpg" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Unlock Your Potential with Martial Arts Training
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our martial arts school, where discipline, focus, and self-improvement are at the core of our training. Whether you are a beginner looking to develop self-defense skills or an experienced practitioner seeking to enhance your martial arts journey, our dedicated instructors are here to guide you every step of the way. Through our comprehensive training programs, you will learn traditional techniques, build physical strength, cultivate mental resilience, and gain invaluable life skills. Join our martial arts community and embark on a transformative journey of personal growth and empowerment. Start your martial arts training today!
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/gJ7HfCh/group-boys-children-training-martial-arts-karate-isolated-black-studio-background-sportive-lifestyle.png
" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Empower Yourself with Martial Arts and Embrace a Life of Confidence
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our martial arts center, where empowerment begins. Our comprehensive martial arts programs offer a holistic approach to personal development. Through martial arts training, you will gain self-defense skills, improve physical fitness, and enhance mental well-being. Our skilled instructors create a supportive and inclusive environment, fostering personal growth, resilience, and self-confidence. Join our community and unlock your full potential, both on and off the training mat.
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/vzTzMdM/karate-fighters-1.jpg" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Master the Art of Self-Defense and Cultivate Inner Strength
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    At our martial arts academy, we believe in the power of self-defense and self-empowerment. Our experienced instructors teach practical self-defense techniques rooted in traditional martial arts principles. Beyond physical skills, our training nurtures mental fortitude, discipline, and situational awareness. Discover the art of self-defense, build your confidence, and develop the strength to protect
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/5jRNRgQ/front-view-people-practicing-taekwondo.jpg" className="w-full object-cover h-[calc(100vh-120px)]" />
                        <div className="absolute inset-0  flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='space-y-7 w-1/2 ml-20 text-white'>
                                <h1 className='md:text-7xl font-bold text-white text-3xl '>
                                    Unlock Your Potential with Martial Arts Training
                                </h1>
                                <p className='pr-[30%] hidden md:flex'>
                                    Welcome to our martial arts school, where discipline, focus, and self-improvement are at the core of our training. Whether you are a beginner looking to develop self-defense skills or an experienced practitioner seeking to enhance your martial arts journey, our dedicated instructors are here to guide you every step of the way. Through our comprehensive training programs, you will learn traditional techniques, build physical strength, cultivate mental resilience, and gain invaluable life skills. Join our martial arts community and embark on a transformative journey of personal growth and empowerment. Start your martial arts training today!
                                </p>
                                <div>
                                    <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 px-[30px]'>Enroll Now</Link>
                                    <Link className='btn btn-outline btn-primary rounded-full border-2'>Preview Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;