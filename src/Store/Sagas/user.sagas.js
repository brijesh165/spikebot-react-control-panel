import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
import userTypes from './../Action/user.types';
import { signInSuccess, signOutUserSuccess, userError} from './../Action/user.action';

const api = "https://live.spikebot.io:8443";

export const handleSignIn = async ({userAuth, additionalData}) => {
    if (!userAuth) return;
    const userRef = await axios.post(`${api}/auth/login`, {
        user_name: userAuth.email,
        user_password: userAuth.password,
        phone_id: "IOS",
        phone_type: "IOS",
        user_id: "1584017623735_Gn-21zqn2"
    })
    .then((data) => {
        return data.data.data;
    })
    .catch((error) => {
        console.log(error);
    })

    return userRef;
}   

export function* onSignIn(userCredentials) {
    try {
        const userRef = yield call(handleSignIn, {userAuth: userCredentials.payload});
        yield put(
            signInSuccess({
                ...userRef,
            })
        )    
    } catch(error) {
        console.log(error);
    }
}

export function* onSignInStart() {
    yield takeLatest(userTypes.SIGN_IN_START, onSignIn);
}

export function* onSignOut() {
    try {
        yield put(
            signOutUserSuccess()
        )
    } catch(error) {
        console.log(error);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, onSignOut);
}

export default function* userSagas() {
    yield all([
        call(onSignInStart),
        call(onSignOutUserStart)
    ])
}