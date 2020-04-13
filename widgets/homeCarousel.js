import React from 'react';
import Carousel from 'react-native-snap-carousel';
import connect from "react-redux/es/connect/connect";
import {Text, Button, View, StyleSheet} from 'react-native';
import {ENTRIES1} from './carousel/entries';

export default class HomeCarousel extends React.Component {

    _renderItem = ({item, index}) => {
        return (
            <View>
                <Text >{item.title}</Text>
            </View>
        );
    }

    render () {
        let _carousel = null;
        return (
            <Carousel
                ref={(c) => { _carousel = c; }}
                data={ENTRIES1}
                renderItem={this._renderItem}
                sliderWidth={50}
                itemWidth={40}
            />
        );
    }
}


