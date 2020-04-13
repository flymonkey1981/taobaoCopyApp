import React from 'react';
import {connect} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Avatar} from "react-native-elements";


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

const CategoryItem = (props) => {
    const {iconName, itemTitle} = props;
    return(
        <View style={{alignItems:'center'}}>
            <Avatar rounded icon={{ name: iconName }} />
            <Text>{itemTitle}</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
