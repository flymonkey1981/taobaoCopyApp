import React from 'react';
import {connect} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ff5000',
        maxHeight: 20

    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
       // backgroundColor: '#ff5000',

        justifyContent:'space-between',
        marginLeft: 10,
        marginRight: 10

    }


});

const HotSearch = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={{color: 'white'}}> Hot : </Text>
            <Text style={{color: 'white'}}> helicopter </Text>
            <Text style={{color: 'white'}}> toy </Text>
            <Text style={{color: 'white'}}> cosmetic </Text>
            <Text style={{color: 'white'}}> mask </Text>
            <Text style={{color: 'white'}}> tablet </Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(HotSearch);
