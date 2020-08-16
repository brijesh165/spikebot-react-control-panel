import deviceTypes from './../Action/device.types';

const initialState = {
    deviceList: []
};

const deviceReducer = (state=initialState, action) => {
    switch(action.types) {
        case deviceTypes.FETCH_DEVICE_START: {
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