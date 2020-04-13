import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Container, Button, Header, Icon, Left, Body, Right, Content, Item, Label} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faTrashAlt, faFolder, faFlag, faTimes, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import firestore from "@react-native-firebase/firestore";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        //minWidth: 325,
        //alignItems: 'center',
        //justifyContent: 'flex-start',
        backgroundColor: 'white',
        // backgroundColor: 'red',


    },
    row: {
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 1
    }

});



const ReplyMessage = (props) => {
    const {selectedMessage} = props.appReducer;
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isBodyValid, setIsBodyValid] = useState(true);
    // const [messages, setMessages] =

    useEffect(() => {



    },[]);

    const _valid = ()=> {
        console.log('valid');
        if(title.length == 0 ){
            setIsTitleValid(false);
            return;
        }
        if(body.length == 0 ){
            setIsBodyValid(false);
            return;
        }
        setIsTitleValid(true);
        setIsBodyValid(true);

        _compose();

    };
    const _navigateMessage = () => {
        clearForm();
        props.navigation.navigate('MessageContent');

    };

    const clearForm = ()=> {
        setTitle('');
        setBody('');

    };

    const _compose = () => {
        console.log('selected sender'+selectedMessage.sender);
        console.log(title);
        console.log(body);
        firestore()
            .collection('Users')
            .doc(selectedMessage.sender)
            .collection('Messages')
            .add({
                sender: 'ABC',
                title:title,
                body:body,
                created:firestore.Timestamp.fromDate(new Date())
            })
            .then(() => {
                console.log('Message added!');
                clearForm();
                props.navigation.navigate('Message');
            });

    };
    return (
        <Container style={styles.container}>
            <Header style={{backgroundColor: 'white'}}>
                <Left style={{flex: 1}}>
                    <TouchableOpacity onPress={_navigateMessage}>
                        <FontAwesomeIcon icon={faTimes} size={25}/>
                    </TouchableOpacity>
                </Left>
                <Body style={{flex: 2, flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}>Reply</Text>

                </Body>
                <Right style={{flex: 1}}>
                    <TouchableOpacity onPress={_valid}>
                       <FontAwesomeIcon icon={faPaperPlane} size={25}/>
                    </TouchableOpacity>

                </Right>
            </Header>
            <Content style={{marginLeft: 10, marginRight: 10}}>

                <View style={styles.row}>
                    <Text>From: Me</Text>
                </View>
                <View style={[styles.row,{borderBottomColor: isTitleValid ? '':'red'}]}>
                    <Label>Title</Label>
                    <TextInput onChangeText={text=> setTitle(text)} value={title}/>
                </View>
                <View style={[styles.row,{borderBottomColor: isBodyValid ? '':'red'}]}>
                    <TextInput onChangeText={text=> setBody(text)} value={body}/>
                </View>


            </Content>


        </Container>
    );
};


const mapStateToProps = state => {
    return {
        ...state

    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(ReplyMessage);
