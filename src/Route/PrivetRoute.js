import React from 'react';
import { Children } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return  <Spinner animation="border" variant="primary" style={{margin:'0 50%',marginTop:'300px'}} />
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children; 
};

export default PrivetRoute;