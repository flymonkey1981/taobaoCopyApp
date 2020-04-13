import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({

    container: {
       // width: '100%',
        backgroundColor: '#ff5000'

    },
    wrapper: {
        // alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: '#ff5000',


        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10

    },
    iconImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginRight: 15,


    },
    firstRow: {
        // width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    secondRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thirdRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10
    },

    profileImg: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        backgroundColor: 'white',
        borderRadius: 22.5
    },
    text: {
        height: 30,
        lineHeight: 30,
        fontSize: 10,
       // animation:'movetop 4s infinite'
    },
    cardText: {
        color:'white',
        fontSize: 12
    }



});

const ProfileHeader = (props) => {

    const [profileText, setProfileText] = useState('hello');
    const [spinValue] = useState(new Animated.Value(0));
    const welcomeText = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30]
    });

    const animate = ()=> {
        //setAnimatedValue(0);
        //setSpinValue(new Animated.Value(0));
        spinValue.setValue(0);

        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(()=>animate());
    }
    var index = 0;
    const displayProfileText = () => {

        //animate();
        index == 0 ? setProfileText('Welcome') : setProfileText('john');

        if (index == 0) {
            index = 1;
        } else {
            index = 0;
        }



    };
    useEffect(() => {
        animate();
        setInterval(() => displayProfileText(), 2000);
        // return () => {
        //    clearInterval(timer);
        //};

    }, []);
    // const spin = spinValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0deg', '360deg']
    // });



    return (

        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.firstRow}>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/friend_1.png')}
                    />

                    <Image
                        style={styles.iconImg}
                        source={require('../assets/settings.png')}
                    />

                </View>
                <View style={styles.secondRow}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={styles.profileImg}
                            source={require('../assets/person.png')}
                        />
                        <View style={{ maxHeight: 20, position: 'relative', overflow:'hidden'}}>
                        <Animated.View style={{top: welcomeText}}>
                            <Text style={styles.text}>Welcome, {props.authReducer.user.firstName}</Text>
                            <Text style={styles.text}>We are here</Text>

                        </Animated.View>
                        </View>



                    </View>
                    <View>
                        <Text style={{fontSize: 15, color: 'white'}}>{props.authReducer.user.userName}</Text>
                    </View>

                </View>
                <View style={styles.thirdRow}>
                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <Text style={styles.cardText}>0</Text>
                        <Text style={styles.cardText}>Favorites</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <Text style={styles.cardText}>1</Text>
                        <Text style={styles.cardText}>Shop</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <Text style={styles.cardText}>2</Text>
                        <Text style={styles.cardText}>Footprint</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <Text style={styles.cardText}>3</Text>
                        <Text style={styles.cardText}>Red packet</Text>
                    </View>
                </View>

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
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
