import React, { useContext, useRef, useState } from 'react';
import Container from '../Shared/Container';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [show, setShow] = useState(false)
    const { resetPassword, signInWithGoogle, signIn, setLoading, loading, } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef()


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it


    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto mb-[150px] mt-[50px]'>
                <div className='flex justify-center items-center'>
                    <div className='bg-primary w-[700px] h-[800px] flex justify-center items-center rounded-b-full' style={{
                        backgroundImage: 'url("https://themeim.com/wp/sword/wp-content/uploads/2022/02/element-13.png")',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <img className='w-[70%]' src="https://i.ibb.co/QjDLcXX/karate-girl-with-black-belt-155003-45276-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='border-4 border-primary w-[700px] h-[800px] flex flex-col justify-center items-center rounded-t-full' style={{
                        backgroundImage: 'url("https://themeim.com/wp/sword/wp-content/uploads/2022/02/element-7.png")',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='mb-8 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                            <p className='text-sm text-gray-400'>
                                Sign in to access your account
                            </p>
                        </div>
                        <form className='flex flex-col justify-center items-center gap-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email Here" className="input input-bordered w-full rounded-full border-primary" />
                            </div>
                            <div className="relative form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name="password" placeholder="Password Here" className="input input-bordered w-full rounded-full border-primary" />
                                <span className='text-[20px] inline-block absolute right-[10px] top-[50px] cursor-pointer text-primary' onClick={() => setShow(!show)}>
                                    <span>
                                        {
                                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </span>
                            </div>

                            <div className='grid grid-cols-2 gap-10'>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <span className="label-text">Remember me</span>
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </div>
                                <button className='text-[14px] hover:underline hover:text-primary text-gray-400'>
                                    Forgot password?
                                </button>
                            </div>

                            <div className='flex justify-center items-center flex-col'>
                                <input className='btn rounded-full border-2 hover:bg-transparent hover:text-primary btn-primary mt-5 mb-5 w-full text-white' type="submit" value="SignIn" />
                                <div className="divider">OR</div>
                                <div className='flex flex-col justify-center w-full items-center'>
                                    <p className='mb-5'>sign in with other accounts?</p>
                                    <div className='w-full'>
                                        <button className="btn btn-outline btn-primary w-full rounded-full"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                                    </div>
                                    <p className='mt-5'>Don’t have an account? <Link to='/singUp' className='text-primary'>Click here to sign up.</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
