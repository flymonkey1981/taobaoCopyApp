import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Body, Card, CardItem, Container, Content, Header, Icon, Input, Item, Left, Right} from 'native-base';
import NotificationIcon from "../widgets/notificationIcon";
import CategoryItem from "../widgets/categoryItem";
import TaobaoCarousel from '../widgets/carousel/carousel';
import * as actions from "../action/actions";
import * as CONSTANTS from "../action/constants";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import firestore from '@react-native-firebase/firestore';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        //minWidth: 325,
        //alignItems: 'center',
        //justifyContent: 'flex-start',
        backgroundColor: '#d3d3d3',
        // backgroundColor: 'red',


    },

    // rest of the styles
});

const Home = (props) => {

    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    useEffect(() => {



        // Stop listening for updates when no longer required

        //console.log('usersCollection');
        //console.log(usersCollection);
        console.log(props.authReducer.token);

        fetch(CONSTANTS.API_URL+'/api/v1/product/getBestSellingProducts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.authReducer.token}`
            }
        }).then((response)=>response.json())
            .then((data) => {
                console.log(data);
              setBestSellingProducts(data);

            }).catch(err => {console.log('error');console.log(err)});




    }, []);



    return (
        <Container>

            <Header searchBar rounded style={{backgroundColor:'white'}}>

                <Left style={{flex:1}}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../assets/hamMenu.png')}
                />
                </Left>
                <Body style={{flex: 3, flexDirection: 'row', marginRight: 20}}>



                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="Search" onFocus={()=>{props.navigation.navigate('Search');props.navigation.getParam('searchField')&&props.navigation.getParam('searchField').focus()}} onChange ={()=>console.log('on change')}/>

                </Item>


                </Body>
                <Right style={{flex:1, marginRight: 10}}>
                    <NotificationIcon notification = {[1,2,3]} iconName={faShoppingCart} size={25}/>

                </Right>



            </Header>

             <Content style={{marginLeft: 10, marginRight: 10}}>

                 <View style={{marginBottom: 15}}>
                     <Text style={{fontSize:18, fontWeight:'bold'}}>Categories: </Text>

                 </View>
                 <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 15}}>
                     <CategoryItem iconName='tv' itemTitle={'tv'}/>
                     <CategoryItem iconName='toys' itemTitle={'toys'}/>
                     <CategoryItem iconName='smartphone' itemTitle={'phone'}/>
                     <CategoryItem iconName='movie' itemTitle={'movie'}/>
                     <CategoryItem iconName='book' itemTitle={'book'}/>
                 </View>

                 <View>
                     <Text style={{fontSize:18, fontWeight:'bold'}}>Newest Offer:</Text>
                     <TaobaoCarousel/>
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 15}}>
                     <Text style={{fontSize:18, fontWeight:'bold'}}>Best Selling: </Text>
                     <Text style={{fontSize:18}}>See All</Text>
                 </View>
                 <View style={{flexDirection: 'row'}}>
                     {
                         bestSellingProducts.length > 0&&bestSellingProducts.map((product) =>
                             <Card style={{flex:1}}>
                                 <CardItem>
                                     <Body style={{flexDirection:'column', alignItems:'center'}}>
                                     <Image
                                         style={{width: 80, height: 100}}
                                         source={{ uri: product.productImageUrl}}
                                     />

                                     <Text>
                                         {product.productName}
                                     </Text>
                                     <Text>
                                         {product.price}
                                     </Text>
                                     </Body>
                                 </CardItem>
                             </Card>
                         )
                     }



                 </View>
             </Content>


        </Container>
    );
};


const mapStateToProps = state => {
    return {
        ...state

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBestSellingProducts: (accessToken) => {
            dispatch(actions.getBestSellingProducts(accessToken));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
