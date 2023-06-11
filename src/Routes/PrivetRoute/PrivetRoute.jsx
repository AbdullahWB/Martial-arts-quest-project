import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import useAuth from '../../Hook/useAuth';

const PrivetRoute = () => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Loading />
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;