import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/actions';
import {Container, Content, Form, Item, Input, Label, Button} from 'native-base';
import {Image, StyleSheet, View, TouchableHighlight, Text} from "react-native";
import {authorize} from "react-native-app-auth";
const config = {
    issuer: 'https://dev-602187.okta.com/oauth2/default',
    clientId: '0oa3xtxk3YA8zfBUt4x6',
    redirectUrl: 'com.okta.dev-602187:/callback',
    additionalParameters: {},
    scopes: ['openid', 'profile', 'email', 'offline_access']

};

const Login = (props) => {

    useEffect(() => {

        console.log('Access Token');
        if (!props.token) {
            _authorize();
        }

        console.log(props.token);

        console.log(props.users);
            //.then(data=>console.log(data));


    }, []);

    const _authorize = async() => {
        console.log('authorize');
        try {
            //const authState = await authorize(config);

            authorize(config).then(data=>{
                console.log('returned data');
                console.log(data);

                props.setAccessToken(data.accessToken);
                props.fetchUsers(data.accessToken);



            })




        } catch (error) {
            alert('Failed to log in'+error.message);
        }
    };
    const _gotoSignIn = ()=> {
       props.navigation.navigate('Register');
    };

    const _login = (userName, password)=> {
       console.log('token'+props.authReducer.token);
       props.login(props.authReducer.token, userName, password, props);
    };
    return (
        <Container style={styles.container}>

            <Content contentContainerStyle={{flex: 1, alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/flooop.png')}
                />

                    <Form style={{width:'100%'}}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button block style={{marginTop: 15, backgroundColor:'#ff5000'}} onPress={()=> _login('vcb', '1234')}>
                            <Text>Login</Text>
                        </Button>
                    </Form>

                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text>Don't have an account?  </Text>
                    <Button transparent onPress={()=>_gotoSignIn()}>
                        <Text style={{color:'#ff5000'}}>Sign in</Text>
                    </Button>
                </View>







            </Content>


        </Container>
    );


};

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 300,
        height: 300
    }


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
        },
        fetchUsers: (accessToken) => {
            dispatch(actions.fetchUsers(accessToken));
        },
        setAccessToken: (token) => {
            dispatch(actions.setAccessToken(token));
        },
        login: (accessToken,userName, hashPassword, props)=> {
            dispatch(actions.login(accessToken, userName, hashPassword, props));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
