import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchDeviceStart } from './../Actions/products.actions';
import deviceTypes from './../Action/device.types';
import axios from 'axios';

const api = "https://live.spikebot.io:8443";

export const getUserDetails = (state) => state.initialState;

export const handlefetchDevice = () => {
    let userDetails = yield select(getUserDetails);
    console.log(userDetails);

    const devices = await axios.post(`${api}/device/list`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${userDetails.token}`
            },
            phone_id: "IOS",
            phone_type: "IOS",
            fcm_token: "123"
        }
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

export function* fetchDevices() {
    try {
        const deviceList = yield call(handlefetchDevice);
        console.log(deviceList);
    } catch(error) {
        console.log(error);
    }
}

export function* onFetchDeviceStart() {
    yield takeLatest(deviceTypes.FETCH_DEVICE_START, fetchDevices);

}