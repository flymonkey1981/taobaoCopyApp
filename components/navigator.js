import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/actions';
import {authorize} from "react-native-app-auth";
import Router from "../router/router";


const config = {
    issuer: 'https://dev-602187.okta.com/oauth2/default',
    clientId: '0oa3xtxk3YA8zfBUt4x6',
    redirectUrl: 'com.okta.dev-602187:/callback',
    additionalParameters: {},
    scopes: ['openid', 'profile', 'email', 'offline_access']
};
const Navigator = (props) => {

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        console.log('App js is called');


    }, []);



    return(
        <Router/>
    );


};

const mapStateToProps = state => {
    return {
        ...state
        //userName: state.userName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setAccessToken: (token) => {
            dispatch(actions.setAccessToken(token));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
