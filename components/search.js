import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button, Container, Content, Header, Icon, Left, List, ListItem} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import * as CONSTANTS from "../action/constants";
import useDebounce from '../util/debounce';
import ShoppingItem from "../widgets/shoppingItem";


const styles = StyleSheet.create({});
let inputField;

const Search = (props) => {
    const [borderColor, setBorderColor] = useState('initial');
    const [searchList, setSearchList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isHintResult, setIsHintResult] = useState(true);
    const [productList, setProductList] = useState([]);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    useEffect(() => {
        //inputField.focus();
        console.log('useEffect');
        console.log(inputField);
        console.log(props);
        //inputField.focus();
        if (debouncedSearchTerm) {
            // Set isSearching state

            // Fire off our API call
            _searchCharacters(debouncedSearchTerm).then(result => {
                console.log('results');

                let res = result.filter((item)=> item.employee_name.toLowerCase().search(searchTerm.toLowerCase()) >= 0);
                let temp = [];
                res.map((item)=>temp.push(<ListItem onPress={()=>_handleListClick(item.employee_name)}><Text>{item.employee_name}</Text></ListItem>));


                setSearchList(temp);
            });
        } else {
            setSearchList([]);
        }



    }, [debouncedSearchTerm]);

   const  _handleListClick = (item)=> {
      // console.log('inputField');
      // console.log(inputField);
       setSearchTerm(item);
       setSearchList([]);
       setIsHintResult(false);
       //console.log('inputField');
      // console.log(inputField);
       _search();

   };

    const _navigateToHome = () => {
        props.navigation.navigate('Home', {searchField: inputField});
    };
    const _search = () => {
       // console.log('search');
        inputField.blur();
        setIsHintResult(false);
        fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', {
            method: 'GET'
        }).then((response)=>response.json())
            .then((data) => {
                let temp = [];
                temp.push(<ShoppingItem imageSource={'https://ozmobiles.com.au/media/catalogue/product/_/iphone-x-space-grey_400_400.png'} header={'Iphone 11 is a amazing product and help you enjoy'} price={1200} numOfBought={324}/>);
                setProductList(temp);

            }).catch(err => console.log(err));
    };



    // API search function
    const _searchCharacters = (search) =>{

        return fetch(
            'http://dummy.restapiexample.com/api/v1/employees',
            {
                method: 'GET'
            }
        )
            .then(r => r.json())
            .then(result => result.data
            )
            .catch(error => {
                console.error(error);
                return [];
            });
    }


    return (
        <Container>
            <Header searchBar={true} rounded={true} style={{backgroundColor: '#f5f7f6'}}>
                <Left style={{flex: 1}}>
                    <TouchableOpacity onPress={_navigateToHome}>
                        <FontAwesomeIcon icon={faArrowLeft} size={25}/>
                    </TouchableOpacity>
                </Left>

                <View style={{
                    flex: 5,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: borderColor,
                    borderRadius: 15,
                    marginTop: 8,
                    marginBottom: 8
                }}>
                    <View
                        style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginRight: 10}}>
                        <TextInput style={{flex: 1}} placeholder="Search" autoFocus={true}
                                   onFocus={() => {console.log('focus');setBorderColor('red'); inputField.clear(); setIsHintResult(true); setProductList([])}} onChangeText={(text) =>setSearchTerm(text)}
                                   ref={input => inputField = input} value={searchTerm}/>
                        <Icon name="ios-camera"/>
                    </View>

                </View>
                <Button style={{
                    flex: 1,
                    marginLeft: 10,
                    paddingTop: 15,
                    paddingBottom: 15,
                    paddingLeft: 8,
                    paddingRight: 8,
                    borderRadius: 20,
                    backgroundColor: '#ff5000'
                }} onPress={() => _search()}>
                    <Text style={{color: 'white'}}>Search</Text>
                </Button>


            </Header>
            <Content>
                <List>
                    <Text>{isHintResult}</Text>
                    {
                        isHintResult&& searchList
                    }
                </List>
                {
                    productList
                }


            </Content>
        </Container>
    );
};


export default (Search);
