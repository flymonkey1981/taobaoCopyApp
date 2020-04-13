import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({

    container: {
        // width: '100%',
       // backgroundColor: '#ff5000',
        top: -10



    },
    wrapper: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10

    },
    wrapper1: {
        flexDirection:'column',
       // justifyContent:'space-between',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10

    },
    board: {
        //  flex: 1,
        flexDirection:'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        marginBottom: 10
    },
    iconImg: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        marginRight: 8


    },
    orderImg: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
    }



});

const ProfileContent = (props) => {




    return (

        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.board}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 17}}>Red packet</Text>
                        <Text style={{fontSize: 12}}>91 rmb red packet</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.iconImg}
                            source={require('../assets/truck.png')}
                        />
                    </View>
                </View>

                <View style={styles.board}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 17}}>Red packet</Text>
                        <Text style={{fontSize: 12}}>91 rmb red packet</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.iconImg}
                            source={require('../assets/truck.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.wrapper1}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10}}>
                    <Text>My Orders:</Text>
                    <Text>Check all orders</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between',marginLeft: 10, marginRight: 10,marginTop: 10, marginBottom:10}}>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/wallet.png')}
                        />
                        <Text>Payment</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/package.png')}
                        />
                        <Text>Package</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/delivery.png')}
                        />
                        <Text>Delivery</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/comment.png')}
                        />
                        <Text>Comment</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/money.png')}
                        />
                        <Text>Refund</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);
