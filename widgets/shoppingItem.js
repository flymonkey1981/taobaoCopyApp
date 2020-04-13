import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import * as PropTypes from "prop-types";
import FocusBoard from "./focusBoard";


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
        flexDirection: 'row',
        // backgroundColor: '#ff5000',

        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10

    }


});

const ShoppingItem = (props) => {
    const {imageSource, header, price, numOfBought} = props;
    return (
        <View style={{flex: 1, alignItems: 'center',borderRadius: 10, backgroundColor: 'white', marginLeft: 5, marginRight: 5}}>

                <View style={{flex: 1}}>
                    <Image
                        style={{width: 120, height: 120}}
                        source={{uri: imageSource}}
                    />
                </View>
                <View style={{marginLeft: 5, marginRight: 5, flex: 1}}>
                    <Text>{header}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%',paddingLeft: 5, paddingRight: 5}}>
                    <Text>${price}</Text>
                    <Text>{numOfBought} bought</Text>
                </View>


        </View>

    );
};

ShoppingItem.propTypes = {
    imageSource: PropTypes.string,
    header: PropTypes.string,
    price: PropTypes.number,
    numOfBought: PropTypes.number
};

export default ShoppingItem;





