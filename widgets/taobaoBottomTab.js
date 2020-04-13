import React from 'react';
import {connect} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import CustomTabBarIcon from './customTabBarIcon'



const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        alignContent: 'center',
        height: 56,
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: 'white',

    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center'
    }

    // rest of the styles
});

const TaobaoBottomTab = (props) => {
    const {navigation} = props;
    const routes = navigation.state.routes;
    console.log(routes);
    const navigationHandler = (routeName) => {
        props.navigation.navigate(routeName);
    }

    return(

        ![3,4].includes(navigation.state.index) && <View style={styles.container}>
               {
                   routes.map((route, index) =>


                      ['Home','Message','Profile'].includes(route.key) &&  <View style={styles.tabBarItem}>
                                   <CustomTabBarIcon
                                       key={route.key}
                                       routeName={route.routeName}
                                       onPress={(routeName) => navigationHandler(routeName)}
                                       focused={navigation.state.index === index}
                                       index={index}
                                   />
                               </View>

                   )
               }

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


export default connect(mapStateToProps, mapDispatchToProps)(TaobaoBottomTab);
