import React from 'react';
import {Text, Button, View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

export default class CustomTabBarIcon extends React.PureComponent {

    render() {

        const {index, focused, routeName} = this.props;
        let images = {
            Home: require('../assets/home.png'),
            Message: require('../assets/message.png'),
            Profile: require('../assets/profile.png')
        };


        return (
            <TouchableWithoutFeedback
                onPress={() => this.onSelect(routeName)}
            >
                <View style={[styles.container, focused ? styles.active : styles.inactive]}>
                    <View style={styles.icon}>
                        {/*<Icon name={icon} color='white' size={24}/>*/}
                        <Image
                            style={styles.iconImg}
                            source={images[routeName]}
                        />

                    </View>
                    <Text style={styles.textStyle}>{routeName}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    onSelect = (routeName) => {
        this.props.onPress(routeName);
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    active: {
        borderTopWidth: 3,
        borderColor: 'white'
    },
    inactive: {
        borderTopWidth: 3,
        borderColor: 'blue'
    },
    textStyle: {

        fontSize: 13
    },
    iconImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',


    },
});
