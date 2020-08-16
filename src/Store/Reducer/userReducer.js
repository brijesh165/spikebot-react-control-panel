import userTypes from './../Action/user.types';

const initialState = {
    currentUser: null,
    auth_key: null,
    userErr: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case userTypes.SIGN_IN_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                currentUser: action.payload.first_name,
                auth_key: action.payload.auth_key,
                userErr: []
            }
        }

        case userTypes.userErr: {
            return {
                ...state,
                userErr: action.payload
            }
        }

        case userTypes.SIGN_OUT_USER_SUCCESS: {
            return {
                ...state,
                ...initialState
            }
        }

        default: {
            return state;
        }
    }
}

export default userReducer;