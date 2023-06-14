import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../Shared/Container';
import { toast } from 'react-hot-toast';

const SentFeedback = () => {
    const { id } = useParams();

    const handleSubmitFeedback = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;

        fetch(`http://localhost:5000/classes/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                reset()
                if (modifiedCount > 0) {
                    toast.success('Feedback submitted successfully');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='flex justify-center items-center flex-col'>
            <Container>
                <h3 className="font-bold text-lg mb-2">Your Feedback</h3>
                <form onSubmit={handleSubmitFeedback}>
                    <textarea
                        name="feedback"
                        id="feedback"
                        cols="30"
                        rows="5"
                        placeholder="Write your feedback"
                        className="textarea border-2 textarea-primary w-full"
                    ></textarea>
                    <input
                        type="submit"
                        value="Submit Feedback"
                        className="btn btn-primary rounded-full w-full text-white hover:text-primary hover:bg-transparent mt-3 border-2"
                    />
                </form>
            </Container>
        </div>
    );
};

export default SentFeedback;
