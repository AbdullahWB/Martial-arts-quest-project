import React, { useEffect, useState } from 'react';

const AllClass = () => {
    const [classItems, setClassItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClassItems(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default AllClass;