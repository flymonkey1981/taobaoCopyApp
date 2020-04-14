import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import MessageHeader from "../widgets/messageHeader";
import MessageBanner from "../widgets/messageBanner";
import {Content, List, ListItem, Text, Left, Icon, Button, Body, Right, Badge} from 'native-base';
import firestore from "@react-native-firebase/firestore";
import {makeMultipleLinesShort, uniq} from '../util/appUtil';
import * as actions from "../action/actions";
let _ = require('lodash');


const styles = StyleSheet.create({

    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#d3d3d3'

    },

    // rest of the styles
});



const Message = (props) => {
    const [messages, setMessages] = useState([]);
    const [msgLength, setMsgLength] = useState(0);

    useEffect(() => {

        // firestore()
        //     .collection('Users')
        //     .doc('ABC')
        //     .collection('Senders')
        //     .get()
        //     .then(querySnapshot => {
        //         console.log('Total users: ', querySnapshot.size);
        //
        //         querySnapshot.forEach(documentSnapshot => {
        //             const source = documentSnapshot.metadata.hasPendingWrites ? "Local" : "Server";
        //             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data(), source);
        //         });
        //     }
        // firestore()
        //     .collection('Users')
        //     .doc('ABC')
        //     .collection('Messages')
        //     .where('unread','==',true)
        //     .get()
        //     .then(querySnapshot => {
        //             console.log('Total unread message: ', querySnapshot.size);
        //             setMsgLength(querySnapshot.size);
        //
        //         }
        //     );
        const subscriber = firestore()
            .collection('Users')
            .doc('ABC')
            .collection('Messages')
            .orderBy('created','desc')

           //.doc('sam')
           //.collection('Messages')
            .onSnapshot({includeMetadataChanges: true},querySnapshot => {
                console.log('User data: ', querySnapshot.size);
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                  //  console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    temp.push(documentSnapshot);


                });

                setMessages(temp);
                setMsgLength(_.filter(temp, function(item){ return item.data().unread}).length);
            });

        return () => subscriber();

     }, []);

    const _setRead = (message)=> {
        firestore()
            .collection('Users')
            .doc('ABC')
            .collection('Messages')
            .doc(message.id)
            .update(
                {
                    unread: false
                }
            ).then(()=> console.log('Message '+message.id+' is updated'));


    };

    return (
        <View style={styles.container}>
            <MessageHeader/>
            <MessageBanner numOfMessage={msgLength}/>
            <Content style={{backgroundColor: 'white'}}>

                <List>
                {
                    messages&&messages.map(message =>
                        <ListItem>
                            <Left style={{flex: 1}}>
                                <Icon active name="ios-man"/>
                            </Left>
                            <Body style={{flex: 3}}>
                                <Text>{message.data().sender}</Text>
                                <Text>{makeMultipleLinesShort(message.data().title)}</Text>
                            </Body>
                            <Right style={{flex: 1}}>
                                <Text style={{fontSize: 10}}>{message.data().created.toDate().toLocaleDateString()}</Text>
                                <Button transparent onPress={()=>{props.navigation.navigate('MessageContent'); props.selectMessage(message.id, message.data()); _setRead(message)}}>
                                    <Icon active name="arrow-forward"/>
                                </Button>
                            </Right>
                        </ListItem>
                    )
                }
                </List>
                {/*<List>*/}
                    {/*<ListItem>*/}
                        {/*<Text>A</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Aaron Bennet</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Ali Connors</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>B</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}

                    {/*<ListItem icon>*/}
                        {/*<Left>*/}
                            {/*<Button style={{backgroundColor: "#007AFF"}}>*/}
                                {/*<Icon active name="wifi"/>*/}
                            {/*</Button>*/}
                        {/*</Left>*/}
                        {/*<Body>*/}
                        {/*<Text>flymonkey1981</Text>*/}
                        {/*<Text style={{fontSize: 12}}>thanks for your reply</Text>*/}
                        {/*</Body>*/}
                        {/*<Right>*/}
                            {/*<View style={{flexDirection: 'column', alignItems: 'center'}}>*/}
                                {/*<Text style={{fontSize: 12}}>Jun 1978</Text>*/}
                                {/*<Badge>*/}
                                    {/*<Text>2</Text>*/}
                                {/*</Badge>*/}
                            {/*</View>*/}
                            {/*<Icon active name="arrow-forward"/>*/}
                        {/*</Right>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz1</Text>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz2</Text>*/}
                    {/*</ListItem>*/}

                    {/*<ListItem>*/}
                        {/*<Text>Bradley Horowitz3</Text>*/}
                    {/*</ListItem>*/}


                {/*</List>*/}
            </Content>
        </View>
    );
};


const mapStateToProps = state => {
    return {
        ...state

    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectMessage: (id, message) => {
            dispatch(actions.selectMessage(id, message));
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Message);
