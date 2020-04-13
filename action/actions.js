import * as CONSTANTS from "./constants";

const setCurrentLocation = (location) => {
    alert(JSON.stringify(location))
    return {
        type: CONSTANTS.SET_CURRENT_LOCATION,
        value: location
    };
};

const setAccessToken = (token) => {
    //alert(JSON.stringify(location))
    return {
        type: CONSTANTS.SET_ACCESS_TOKEN,
        value: token
    };
};

const fetchUsers =(accessToken)=> {


    return (dispatch) => {
        return fetch(CONSTANTS.API_URL+'/api/v1/person', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>response.json())
            .then((data) => {
            console.log(data);
            dispatch({
                type: CONSTANTS.GET_USERS,
                payload: data
            });

        }).catch(err => {console.log('error');console.log(err)});
    }
};

const getBestSellingProducts =(accessToken)=> {

    return (dispatch) => {
        return fetch(CONSTANTS.API_URL+'/api/v1/product/getBestSellingProducts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>response.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: CONSTANTS.BEST_SELLING_PRODUCTS,
                    payload: data
                });

            }).catch(err => {console.log('error');console.log(err)});
    }
};

const createUser =(accessToken, user, props)=> {


    return (dispatch) => {
        return fetch(CONSTANTS.API_URL+'/api/v1/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>response.json())
            .then((data) => {
                //console.log(data);
                dispatch({
                    type: CONSTANTS.CREATE_USER,
                    payload: "create_user"
                });
                props.navigation.navigate('Login');

            }).catch(err => {console.log('error');console.log(err)});
    }
};

const login =  (accessToken, username, password, props)=> {


    return (dispatch) => {
        return fetch(CONSTANTS.API_URL+'/api/v1/user/login?username='+username+'&hashpassword='+password, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>response.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: CONSTANTS.LOGIN,
                    payload: data
                });
                props.navigation.navigate('Home');

            }).catch(err => console.log(err));
    }
};

const validateUserName = (accessToken, username) => {
    return (dispatch) => {
        return fetch(CONSTANTS.API_URL+'/api/v1/user/isUserNameUnique?username='+username, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then((response)=>response.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: CONSTANTS.VALIDATE_USERNAME,
                    payload: false
                });


            }).catch(err => {
                console.log(err);
                dispatch({
                    type: CONSTANTS.VALIDATE_USERNAME,
                    payload: true
                });
            });
    }
};

const selectMessage = (id, message) => {
    return {
        type: CONSTANTS.SELECT_MESSAGE,
        payload: {id: id, message: message}
    };

};




export { setCurrentLocation, setAccessToken, fetchUsers, login, createUser,validateUserName, getBestSellingProducts, selectMessage };
