import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Instructors;