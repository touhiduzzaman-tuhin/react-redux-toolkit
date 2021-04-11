import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action';

const Auth = () => {
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Please Log In</h3>
            <input type="text" placeholder="Enter Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={() => dispatch(loginAction(phone))}>
              Log in
            </button>
        </div>
    );
};

export default Auth;