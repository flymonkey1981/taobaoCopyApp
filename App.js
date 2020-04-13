import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Platform} from 'react-native';

import {Provider} from 'react-redux';
import {persistor, store} from './redux/reducer';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './router/router';
import Constants from "expo-constants";
import * as Alert from "react-native-web";
import { authorize, refresh, revoke } from 'react-native-app-auth';
import Navigator from "./components/navigator";



export default function App() {

    const [hasLoggedInOnce, setHasLoggedInOnce] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const [accessTokenExpirationDate, setAccessTokenExpirationDate] = useState();
    const [refreshToken, setRefreshToken] = useState();








    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {
                    (Platform.OS == 'ios') ?
                    <View style={styles.statusBar}/>
                    :
                    <StatusBar barStyle='light-content' backgroundColor='#ff5000' transculent={true}/>
                }


                <Navigator/>


            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        //backgroundColor: "#C2185B",
        backgroundColor: '#ff5000',
        height: Constants.statusBarHeight,
    }
});
