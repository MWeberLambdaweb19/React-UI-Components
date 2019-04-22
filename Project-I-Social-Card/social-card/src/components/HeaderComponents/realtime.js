import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import './Header.scss';

export default class Realtime extends React.Component {
    render() {
        return (
        <Moment fromNow="day">{this.props.dateToFormat}</Moment>
        )
    }
}