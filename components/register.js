import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/actions';
import {Container, Content, Text, Form, Item, Input, Label, Button,DatePicker, Icon} from 'native-base';
import {Image, StyleSheet} from "react-native";
import * as util from '../util/appUtil'


const Register = (props) => {
    const [dob, setDob] = useState(new Date());
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [hashPassword, setHashPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [validFirstName, setValidFirstName] = useState(true);



    const _cancel = ()=>{
        props.navigation.navigate('Login');
    };

    const _setDate = (newDate)=> {
        setDob(newDate);
    };

    const _submit = ()=> {
        if(validPassword&&validFirstName) {
            let _user = {};
            _user.userName = userName;
            _user.hashPassword = hashPassword;
            _user.firstName = firstName;
            _user.lastName = lastName;
            let moment = require('moment');


            _user.dob = moment(dob).format('DD/MM/YYYY');
            _user.status = 1;
            props.createUser(props.authReducer.token, _user);
        }


    };

    const _validUserName = () => {
        props.validateUserName(props.authReducer.token, userName);
    };

    const _validatePassword = ()=> {
        if(hashPassword.length >  4) {
            setValidPassword(true);

        }else{

            setValidPassword(false);
        }

    };

    const _validateName = () => {
        if(util.containIllegalNumber(firstName)){
            setValidFirstName(false);
        }else{
            setValidFirstName(true);
        }
    };
    return (
        <Container style={styles.container}>

            <Content contentContainerStyle={{flex: 1, marginLeft: 5, marginRight: 5}}>
                <Text>Register</Text>
                <Form style={{width:'100%'}}>
                    <Item error={!props.appReducer.validateUsername}>
                        <Label>Username</Label>
                        <Input onChangeText={text => setUserName(text)} onEndEditing={() => _validUserName()} value={userName}/>
                        {props.appReducer.validateUsername ? <Text/>:<Icon name='close-circle' />}
                    </Item>
                    <Item error={!validPassword}>
                        <Label>Password</Label>
                        <Input onChangeText={text => setHashPassword(text)} onEndEditing={() => _validatePassword()} value={hashPassword}/>
                        {validPassword ? <Text/>:<Icon name='close-circle' />}
                    </Item>
                    <Item error={!validFirstName}>
                        <Label>First Name</Label>
                        <Input onChangeText={text => setFirstName(text)} onEndEditing={() => _validateName()} value={firstName}/>
                        {validFirstName ? <Text/>:<Icon name='close-circle' />}
                    </Item>
                    <Item error>
                        <Label>Last Name</Label>
                        <Input onChangeText={text => setLastName(text)} value={lastName}/>
                        <Icon name='close-circle' />
                    </Item>
                    <Item>
                        <Label>Date Of Birth</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            //minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={_setDate}
                            disabled={false}
                        />

                    </Item>
                    <Button block style={{marginTop: 15, backgroundColor:'#ff5000'}} onPress={()=> _submit()}>
                        <Text>Register</Text>
                    </Button>
                    <Button block style={{marginTop: 15, backgroundColor:'#ff5000'}} onPress={()=> _cancel()}>
                        <Text>Cancel</Text>
                    </Button>
                </Form>



            </Content>


        </Container>
    );


};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',


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
        createUser: (accessCode, user, props) => {
            dispatch(actions.createUser(accessCode, user, props));
        },
        validateUserName: (accessCode, userName)=> {
            dispatch(actions.validateUserName(accessCode, userName));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);
