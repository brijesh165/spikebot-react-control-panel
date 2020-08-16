import deviceTypes from './../Action/device.types';

const INITIAL_STATE = {
    deviceList: []
};

const deviceReducer = (state=INITIAL_STATE, action) => {
    switch(action.types) {
        case deviceTypes.FETCH_DEVICE_START: {
            console.log(action.payload);
            return {
                ...state,
                deviceList: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default deviceReducer;