import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import ProfileHeader from "../widgets/profileHeader";

import ProfileContnet from "../widgets/profileContent";


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

const Profile = (props) => {
    return(
        <View style={styles.container}>
           <ProfileHeader />

            <ProfileContnet/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
