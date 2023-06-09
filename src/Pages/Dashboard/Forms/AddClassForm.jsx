import React from 'react';
import Title from '../../../Components/Title';
import useAuth from '../../../Hook/useAuth';
import { useForm } from "react-hook-form";


const AddClassForm = () => {
    const { user } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <div>
                <Title
                    extraTitle={"Add New Program"}
                    title={"Martial Arts Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
                />
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-10 px-32 py-5 rounded-xl m-10 bg-[rgba(255,70,70,0.1)]'>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class name</span>
                            </label>
                            <input type="text" {...register("className", { required: true })} placeholder="Class Name Here" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.className && <span className='text-xs ml-3 text-red-500'>className is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Upload Class Photo</span>
                            </label>
                            <input
                                type="file"
                                id="photo"
                                className="file-input file-input-bordered border-primary file-input-primary w-full rounded-full"
                                {...register('image', { required: true })}
                            />
                            {errors.image && <span className='text-xs ml-3 text-red-500'>Photo is required</span>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" value={user?.displayName} {...register("name", { required: true })} placeholder="Name Here" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.name && <span className='text-xs ml-3 text-red-500'>name is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" value={user?.email} {...register("email", { required: true })} placeholder="Email Here" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.email && <span className='text-xs ml-3 text-red-500'>Email is required</span>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" {...register("availableSeats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.availableSeats && <span className='text-xs ml-3 text-red-500'>availableSeats is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.price && <span className='text-xs ml-3 text-red-500'>price is required</span>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea  type="number" {...register("description", { required: true })} placeholder="description" className="textarea textarea-bordered textarea-lg w-full rounded-xl border-primary" />
                        {errors.description && <span className='text-xs ml-3 text-red-500'>description is required</span>}
                    </div>
                    <input className='btn rounded-full border-2 hover:bg-transparent hover:text-primary btn-primary mt-5 mb-5 w-full text-white' type="submit" value="Add New Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClassForm;