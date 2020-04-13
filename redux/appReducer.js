import * as CONSTANTS from "../action/constants";
import authReducer from "./authReducer";

const initialState = {
    currentLocation: null,
    token: null,
    users: null,
    creatUser: null,
    validateUsername: true,
    bestSellingProducts:[],
    selectedMessage: null

};

//
// Reducer...
//

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SET_CURRENT_LOCATION :
            return { ...state, currentLocation: action.value }

        case CONSTANTS.GET_USERS :
            return { ...state, users: action.payload }
        case CONSTANTS.CREATE_USER :
            return { ...state, creatUser: action.payload }
        case CONSTANTS.VALIDATE_USERNAME :
            return { ...state, validateUsername: action.payload }
        case CONSTANTS.BEST_SELLING_PRODUCTS :
            return { ...state, bestSellingProducts: action.payload }
        case CONSTANTS.SELECT_MESSAGE :
            return { ...state, selectedMessage: action.payload }
        default:
            return state;
    }
};

export default appReducer;
