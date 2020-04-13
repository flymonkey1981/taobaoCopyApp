import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../components/home';
import Profile from '../components/profile';
import Message from '../components/message';
import Login from '../components/login';
import Register from '../components/register';
import Category from '../components/category';
import Search from '../components/search';
import MessageContent from '../components/messageContent';
import ReplyMessage from '../components/replyMessage';
import TaobaoBottomTab from '../widgets/taobaoBottomTab'
import React from "react";


// const AppScreenRouter = createStackNavigator(
//     {
//         Home: { screen: Home},
//
//
//
//     },
//     {
//         headerMode: 'none',
//         navigationOptions: {
//             headerVisible: false,
//         },
//         initialRouteName:'Home'
//     }
// );
const BottomScreenRouter = createBottomTabNavigator(
    {
        Home: {screen: Home},
        Message: {screen: Message},
        Profile: {screen: Profile},
        Login: {screen: Login},
        Register: {screen: Register},
        Category: {screen: Category},
        Search: {screen: Search},
        MessageContent: {screen: MessageContent},
        ReplyMessage: {screen: ReplyMessage},
    },
    {
        initialRouteName:'Home',
        animationEnabled:true,
        tabBarComponent: props => (

            <TaobaoBottomTab {...props} style={{ borderTopColor: '#605F60' }} />
        ),


        // tabBarOptions: {
        //     activeTintColor: '#e91e63',
        //     labelStyle: {
        //         fontSize: 12,
        //     },
        //     style: {
        //         backgroundColor: 'white',
        //     },
        //     showIcon: true
        // }
    }
)

//const Router = createAppContainer(AppScreenRouter);
const Router = createAppContainer(BottomScreenRouter);
export default Router;
