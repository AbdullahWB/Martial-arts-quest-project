import React, { useContext, useRef, useState } from 'react';
import Container from '../Shared/Container';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { saveUser } from '../api/auth';

const Login = () => {
    const [show, setShow] = useState(false)
    const { resetPassword, signInWithGoogle, signIn,} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    // const emailRef = useRef()


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('successfully Logged in ✅')
                saveUser(result.user)
                reset()
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message);
            })
        console.log(data)
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                saveUser(result.user)
                toast.success('successfully Logged in ✅')
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    // TODO: forget password
    // const handleReset = (event) => {
    //     event.preventDefault();

    //     const email = emailRef.current?.value;
    //     console.log(email);
    //     resetPassword(email)
    //         .then(() => {
    //             toast.success("Please check your email for rest link")
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             toast.error(err.message);
    //         })
    // }



    return (
        <Container>
            <Helmet>
                <title>Martial Arts Quest | Login</title>
            </Helmet>
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
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="Email Here" className="input input-bordered w-full rounded-full border-primary" />
                                {errors.email && <span className='text-xs ml-3 text-red-500'>Email is required</span>}
                            </div>
                            <div className="relative form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type={show ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/ })} placeholder="Password Here" className="input input-bordered w-full rounded-full border-primary" />
                                <span className='text-[20px] inline-block absolute right-[10px] top-[50px] cursor-pointer text-primary' onClick={() => setShow(!show)}>
                                    <span>
                                        {
                                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </span>
                                {errors.password?.type === 'required' && <span className='text-xs ml-3 text-red-500'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-xs ml-3 text-red-500'>Password must be 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-xs ml-3 text-red-500'>Password must be under 20 character</span>}
                                {errors.password?.type === 'pattern' && <span className='text-xs ml-3 text-red-500'>Password must be one lowercase one uppercase one digit one special character like: P@ssw0rd!</span>}
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
                                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full rounded-full"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                                    </div>
                                    <p className='mt-5'>Don’t have an account? <Link to='/signUp' className='text-primary'>Click here to sign up.</Link></p>
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
