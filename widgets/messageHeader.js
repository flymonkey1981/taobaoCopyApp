import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Input} from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor: '#ff5000',
        maxHeight: 50,
        paddingBottom: 10

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
        alignItems:'center'


    },
    icon: {
        flex: 1,
        alignItems: 'center'


    },
    iconImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',


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

const MessageHeader = (props) => {
    //library.add(faCoffee);
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 17, marginLeft: 5, marginRight: 5}}>Message</Text>

            <View style={styles.input}>
                <Image
                    style={styles.searchIconImg}
                    source={require('../assets/search.png')}
                />
                <Input placeholder='Search' />
            </View>
            <View style={styles.icon}>
                <Image
                    style={styles.iconImg}
                    source={require('../assets/friend_1.png')}
                />

            </View>
            <View style={styles.icon}>
                <Image
                    style={styles.iconImg}
                    source={require('../assets/add.png')}
                />

            </View>


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

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MessageHeader);
