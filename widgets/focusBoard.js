import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import * as PropTypes from "prop-types";


const styles = StyleSheet.create({
    leftImage: {
        width: 120,
        height: 120
    }
});

const FocusBoard = (props) => {
    const {leftImageSource, header1, header2, price, numOfBought, style} = props;
    //console.log(leftImageSource);
    return (
        <View style={{flexDirection: 'row', borderTopLeftRadius:15, borderTopRightRadius:15, borderBottomLeftRadius: 15, borderBottomRightRadius:15, backgroundColor:'white',overflow: 'hidden' ,...style}}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.leftImage}
                    source={{uri: leftImageSource}}
                />
            </View>
            <View style={{flex: 2, justifyContent: 'space-evenly', marginRight:5}}>
                <View>
                    <Text>{header1}</Text>
                    <Text>{header2}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>${price}</Text>
                    <Text>{numOfBought} bought</Text>
                </View>
            </View>
        </View>
    );
};
FocusBoard.propTypes = {
    leftImageSource: PropTypes.string,
    header1: PropTypes.string,
    header2: PropTypes.string,
    price: PropTypes.number,
    numOfBought: PropTypes.number


};
export default FocusBoard;





