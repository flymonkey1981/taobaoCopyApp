// Initial State
import * as CONSTANTS from "../action/constants";

const initialState = {
    token: null,
    user: []
};
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case CONSTANTS.SET_ACCESS_TOKEN :
            return { ...state, token: action.value }
        case CONSTANTS.LOGIN:
            return { ...state, user: action.payload }
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default authReducer;
