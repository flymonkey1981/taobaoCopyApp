import {createStore, applyMiddleware, combineReducers} from 'redux';
//import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import * as CONSTANTS from "../action/constants";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import appReducer from './appReducer';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
   blacklist: ['authReducer'],
    whitelist: [
        'appReducer',
    ],
};

//
// Initial State...
//



// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer,
    appReducer: appReducer,
});

//
// Store...
//

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// export { store };



const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(createLogger(), thunk));
let persistor = persistStore(store);

export { store, persistor };




