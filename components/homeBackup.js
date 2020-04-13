import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import TaobaoHeader from '../widgets/header';

import * as actions from '../action/actions';
import HotSearch from "../widgets/hotSearch";
import TaobaoCarousel from "../widgets/carousel/carousel";
import * as Alert from "react-native-web";
import { authorize, refresh, revoke } from 'react-native-app-auth';

const config = {
    issuer: 'https://dev-602187.okta.com/oauth2/default',
    clientId: '0oa3xtxk3YA8zfBUt4x6',
    redirectUrl: 'com.okta.dev-602187:/callback',
    additionalParameters: {},
    scopes: ['openid', 'profile', 'email', 'offline_access']
};

const HomeBackup = (props) => {

    const [hasLoggedInOnce, setHasLoggedInOnce] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const [accessTokenExpirationDate, setAccessTokenExpirationDate] = useState();
    const [refreshToken, setRefreshToken] = useState();

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
       // if (!accessToken) {
       //     authorize1();
      //  }
        console.log('Access Token');
        //console.log(props);
        console.log(props.token);

    }, []);

    const authorize1 = async() => {
        console.log('authorize');
        try {
            //const authState = await authorize(config);

            authorize(config).then(data=>{
                console.log('returned data');
                console.log(data);
                setHasLoggedInOnce(true);
                setAccessToken(data.accessToken);
                setAccessTokenExpirationDate(data.accessTokenExpirationDate);
                setRefreshToken(data.refreshToken);
                fetchUsers(data.accessToken);

            })
           // console.log(authState.accessToken);



        } catch (error) {
            alert('Failed to log in'+error.message);
        }
    };

    const postData = async () => {
        alert('starts call');
        const response = await fetch('http://localhost:8080/api/v1/person', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'xijia xu',

            }),
        });
        const json = await response.json();
        json.map(item=>{alert(item.name)});
       // const stars = json.stargazers_count
       // this.setState({stars})
    };
    const fetchUsers = async (accessToken1) => {
            console.log('fetchusers');
            console.log(accessToken1);
            console.log(`Bearer ${accessToken1}`);

            try {

                const response = await fetch('http://localhost:8080/api/v1/user', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken1}`
                    }
                });
                console.log('fetch completed');
                console.log(response);
                const data = await response.json();
               // this.animateState({beers: data});
                console.log(data);
            } catch(error) {
                console.error(error);
            }

    };
    return(
        <View style={styles.container}>
            <TaobaoHeader/>
            <HotSearch/>

            <Text>AccessToken: {accessToken}</Text>
            <Text>Token Expire: {accessTokenExpirationDate}</Text>
            <Text>RefreshToken: {refreshToken}</Text>



            <Button onPress={()=>props.setCurrentLocation('current')} title={'home'}></Button>
            <Button onPress={()=>postData()} title={'Post'}/>
            <Text> {props.currentLocation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#d3d3d3',

    },

});



const mapStateToProps = state => {
    return {
        ...state
        //userName: state.userName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentLocation: (location) => {
            dispatch(actions.setCurrentLocation(location));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeBackup);
