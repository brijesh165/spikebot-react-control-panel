import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchDeviceStart } from './../Actions/products.actions';
import deviceTypes from './../Action/device.types';
import axios from 'axios';

const api = "https://live.spikebot.io:8443";
let state;

export const getUserDetails = (state) => state.initialState;

export const getState = () => {
    console.log('4');
    const derivedState = yield call(getUserDetails);
    state = derivedState;
    console.log(state);
    return state;
};

export const handlefetchDevice = async () => {
    console.log('3');
    let userDetails = await getState();
    console.log('User Details: ', userDetails.user.auth_key);
    const devices = await axios.post(`${api}/device/list`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${userDetails.user.auth_key}`
            },
            phone_id: "IOS",
            phone_type: "IOS",
            user_id: "1584017623735_Gn-21zqn2"
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
        console.log('2');
        const deviceList = yield call(handlefetchDevice);
        console.log(deviceList);
    } catch(error) {
        console.log(error);
    }
}

export function* onFetchDeviceStart() {
    console.log('1');
    yield takeLatest(deviceTypes.FETCH_DEVICE_START, fetchDevices);

}

export default function* deviceSaga() {
    yield call([
        call(onFetchDeviceStart)
    ])
}