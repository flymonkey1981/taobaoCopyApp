import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Header, Left, Body, Right, Item, Icon, Input, Button, Content, Card, CardItem, Text} from 'native-base';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import NotificationIcon from "../widgets/notificationIcon";
import FocusBoard from "../widgets/focusBoard";
import ShoppingItem from "../widgets/shoppingItem";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',




    },

    // rest of the styles
});

const Category = (props) => {
    const _navigateToHome = ()=> {
        props.navigation.navigate('Home');
    };

    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numOfRows = list.length/2;
    let shoppList = [];
    for(let i=0; i < numOfRows; i++) {
       // shoppList.push(<View style={{flexDirection:'row'}}>);
       let childNode = [];
        childNode.push( <ShoppingItem imageSource={'https://ozmobiles.com.au/media/catalogue/product/_/iphone-x-space-grey_400_400.png'} header={'Iphone 11 is a amazing product and help you enjoy'} price={1200} numOfBought={324}/>);
        childNode.push( <ShoppingItem imageSource={'https://ozmobiles.com.au/media/catalogue/product/_/iphone-x-space-grey_400_400.png'} header={'Iphone 11 is a amazing product and help you enjoy'} price={1200} numOfBought={324}/>);
        shoppList.push(<View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10, marginBottom: 10, marginLeft: 5, marginRight: 5}}>{childNode}</View>);
    }


    return(
      <Container>
          <Header>
              <Left  style={{flex: 1, marginLeft: 10 }}>
                  <TouchableOpacity onPress={_navigateToHome}>
                  <FontAwesomeIcon icon={ faArrowLeft } size={25} color={'white'}/>
                  </TouchableOpacity>
              </Left>
              <Body style={{flex:2, alignItems:'center'}}>
              <Text style={{color:'white'}}>Toys</Text>
              <Text style={{color:'white', fontSize:12}}>Bring joy to kids</Text>

              </Body>
              <Right style ={{flex: 1, marginRight: 10}}>
                  <NotificationIcon notification = {[1,2,3]} iconName={faEllipsisV} size={25}/>


              </Right>

          </Header>
          <Content style={{backgroundColor:'black'}}>
              <FocusBoard
                  leftImageSource={'https://ozmobiles.com.au/media/catalogue/product/_/iphone-x-space-grey_400_400.png'}
                  header1={'2 Years payment'}
                  header2={'Iphone 11'}
                  price={1200}
                  numOfBought={2940}
                  style={{marginLeft:10, marginRight:10, marginBottom: 10}}
              />
              <View style={{backgroundColor:'#f5f7f6', borderRadius:10}}>
              {
                 shoppList

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

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Category);
