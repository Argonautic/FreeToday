import React, { Component } from 'react';
import API_KEY from './BingAPIKey'

export default class EventMap extends Component {

    componentDidMount() {
        new Microsoft.Maps.Map(this.refs.myMap, {
            credentials: API_KEY
        });
    }

    render() {
        return (
            <div
                id="myMap"
                ref="myMap"
            />
        )
    }
}