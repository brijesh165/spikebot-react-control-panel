import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchDeviceStart} from './../../Store/Action/device.action';

const ListDetails = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDeviceStart());
    });

    return (
        <div>
            List Details
        </div>
    )
}

export default ListDetails;