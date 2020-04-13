import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'native-base';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
        width: '100%',
        backgroundColor: '#ff5000',
        maxHeight: 70

    },
    wrapper: {
       // flex: 1,
        //flexDirection: 'column',
       // width: '100%',
       // backgroundColor: '#ff5000',
      //  maxHeight: 70
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        marginLeft: 10,
        marginRight: 10

    },
    input: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15,
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'


    },
    icon: {
        flex: 1,
        alignItems: 'center'


    },
    iconImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginRight: 8


    },
    iconText: {
        fontSize: 10
    },
    searchIconImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginLeft: 5,
        marginRight: 5
    }


});

const MessageBanner = (props) => {
   // const [numOfMessage, setNumOfMessage] = useState(0);
    const {numOfMessage} = props;
    // useEffect(() => {
    //
    //
    // },[]);
    return (
        <View style={styles.container}>
            {/*<View style={styles.wrapper}>*/}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 10}}>
                    <Text style={{marginLeft: 5, marginRight: 15, color: 'white'}}>Unread: {numOfMessage}</Text>
                    {/*<TouchableOpacity style={{flexDirection:'row'}}>*/}
                        {/*<FontAwesomeIcon icon={ faTrashAlt } size={15} style={{color:'white', marginRight: 5}}/>*/}
                        {/*<Text style={{color:'white'}}>Delete</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={{backgroundColor: 'white', marginLeft: 5, marginRight: 5, borderRadius: 10, alignItems: 'center',justifyContent:'space-evenly',flexDirection:'row'}}>
                    <View style={{flexDirection:'row', minHeight: 60, alignItems: 'center', justifyContent:'center'}}>
                        <Image
                            style={styles.iconImg}
                            source={require('../assets/truck.png')}
                        />
                        <Text>Delivery</Text>
                    </View>

                    <View style={{flexDirection:'row', minHeight: 60, alignItems: 'center', justifyContent:'center'}}>
                        <Image
                            style={styles.iconImg}
                            source={require('../assets/star.png')}
                        />
                        <Text>Promotion</Text>
                    </View>



                </View>
            {/*</View>*/}
        </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(MessageBanner);
