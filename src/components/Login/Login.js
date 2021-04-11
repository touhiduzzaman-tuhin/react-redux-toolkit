import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import Base from './Base';

const Login = () => {
    const auth = useSelector((state) => state.auth)
    return (
        <div>
            {
                auth.isAuth ? <Base /> : <Auth />
            }
        </div>
    );
};

export default Login;