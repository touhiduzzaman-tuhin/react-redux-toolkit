import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, logoutAction } from '../../redux/action';

const Base = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect( () => {
        dispatch(getDataAction())
    }, []);

    return (
        <div>
            <p>Well Come</p>
            <p>User Id : {auth?.data?.id}</p>
            <p>Phone : {auth.phone}</p>
            <p>Title : {auth?.data?.title}</p>
            <button onClick={() => dispatch(logoutAction())}>
              Log Out
            </button>
        </div>
    );
};

export default Base;