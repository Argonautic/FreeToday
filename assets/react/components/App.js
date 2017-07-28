import React, { Component } from 'react';
import SearchBar from './searchbar'
import EventMap from './eventMap'
import DjangoCSRFToken from 'django-react-csrftoken'

export default class App extends Component {
    render() {
        return (
            <div>
                <DjangoCSRFToken />
                <SearchBar />
                <EventMap />
            </div>
        );
    }
}