import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? (
        <Route {...rest} element={<Component {...rest} />} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute;
