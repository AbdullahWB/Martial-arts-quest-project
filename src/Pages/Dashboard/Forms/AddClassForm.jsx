import React from 'react';
import Title from '../../../Components/Title';
import useAuth from '../../../Hook/useAuth';
import { useForm } from "react-hook-form";
import { imageUpload } from '../../../api/utils';
import Container from '../../../Shared/Container';


const AddClassForm = () => {
    const { user } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const imageData = await imageUpload(data.image[0]);
            const image = imageData.data.display_url;

            const postData = {
                image: image,
                description: data.description,
                price: data.price,
                availableSeats: data.availableSeats,
                instructorName: data.instructorName,
                instructorEmail: data.instructorEmail,
                className: data.className,
                status: data.status,
            };

            const response = await fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            const responseData = await response.json();
            console.log(responseData);

            if (responseData.acknowledged) {
                alert('Data has been successfully posted!');
            } else {
                alert('Failed to post data. Please try again.');
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div>
            <Container>
                <Title
                    extraTitle={"Add New Program"}
                    title={"Martial Arts Classes"}
                    subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
                />
                <form onSubmit={handleSubmit(onSubmit)} className='grid md:gap-10 gap-4 lg:px-32 px-10 py-5 rounded-xl m-10 bg-[rgba(255,70,70,0.1)]'>
                    <input type="text" name="" value={"pending"} {...register("status", { required: true })} className='hidden' id="" />
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
                                <span className="label-text">Upload Photo</span>
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
                            <input type="text" value={user?.displayName} {...register("instructorName", { required: true })} placeholder="Name Here" className="input input-bordered w-full rounded-full border-primary" />
                            {errors.name && <span className='text-xs ml-3 text-red-500'>name is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" value={user?.email} {...register("instructorEmail", { required: true })} placeholder="Email Here" className="input input-bordered w-full rounded-full border-primary" />
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
                        <textarea type="number" {...register("description", { required: true })} placeholder="description" className="textarea textarea-bordered textarea-lg w-full rounded-xl border-primary" />
                        {errors.description && <span className='text-xs ml-3 text-red-500'>description is required</span>}
                    </div>
                    <input className='btn rounded-full border-2 hover:bg-transparent hover:text-primary btn-primary mt-5 mb-5 w-full text-white' type="submit" value="Add New Class" />
                </form>
            </Container>
        </div>
    );
};

export default AddClassForm;