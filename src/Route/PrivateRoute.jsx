import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if (loader) {
        return <ScaleLoader className='mx-auto text-center ' color="#e9a750" />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace ></Navigate>

};

export default PrivateRoute;