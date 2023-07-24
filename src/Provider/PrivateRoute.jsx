import React, { useContext } from 'react';
import {AuthContex} from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContex);
    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to={'/login'} replace> </Navigate>;
};

export default PrivateRoute;