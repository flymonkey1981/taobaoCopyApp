import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Container, Button, Header, Icon, Left, Body, Right, Content} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faTrashAlt, faFolder, faFlag} from "@fortawesome/free-solid-svg-icons";
import firestore from "@react-native-firebase/firestore";
import * as CONSTANTS from '../action/constants';


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

const MessageContent = (props) => {
    const selectedMessage = props.appReducer.selectedMessage.message;
    const id = props.appReducer.selectedMessage.id;
   // const [messages, setMessages] =
    useEffect(() => {



    },[]);
    const _navigateMessage = () => {
        props.navigation.navigate('Message');

    };

    const _replyMessage = () => {
       props.navigation.navigate('ReplyMessage');

    };

    const _deleteMessage = ()=> {
        firestore()
            .collection('Users')
            .doc('ABC')
            .collection('Messages')
            .doc(id)
            .delete()
            .then(()=>{console.log('Delete message!');props.navigation.navigate(CONSTANTS.ROUTE_MESSAGE)});

    };
    return (
        <Container style={styles.container}>
            <Header style={{backgroundColor: 'white'}}>
                <Left style={{flex: 1}}>
                    <TouchableOpacity onPress={_navigateMessage}>
                        <FontAwesomeIcon icon={faArrowLeft} size={25}/>
                    </TouchableOpacity>
                </Left>
                <Body style={{flex: 1, flexDirection: 'row'}}>
                   <Text style={{fontSize: 18}}>Message</Text>

                </Body>
                <Right style={{flex: 2, justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={_deleteMessage}>
                        <FontAwesomeIcon icon={faTrashAlt} size={25}/>
                    </TouchableOpacity>
                    <FontAwesomeIcon icon={faFolder} size={25}/>
                    <FontAwesomeIcon icon={faFlag} size={25}/>
                </Right>
            </Header>
            <Content style={{marginLeft: 10, marginRight: 10}}>
                <View style={styles.row}>
                    <Text>{selectedMessage.title}</Text>
                </View>
                <View style={styles.row}>
                    <Text>From: {selectedMessage.sender}</Text>
                </View>
                <View style={styles.row}>
                    <Text>{selectedMessage.body}</Text>
                </View>
                <View>
                    <Button style={{justifyContent:'center'}} onPress={()=> _replyMessage()}>
                        <Text style={{color:'white'}}>Reply</Text>
                    </Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(MessageContent);
