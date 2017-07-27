import React, { Component } from 'react';
import SearchBar from './searchbar'
//import EventMap from './eventMap'

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <div id="myMap"></div>
            </div>
        );
    }
}