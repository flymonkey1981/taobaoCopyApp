import React from "react";
import {withBadge} from 'react-native-elements';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

@withBadge(props=>props.notification.length ,{left: -1})
export default class NotificationIcon extends React.Component {
    render() {
        console.log(this.props);
        const {iconName, size} = this.props;
        return (
            <FontAwesomeIcon icon={ iconName } size={size}/>
        );
    }
}



