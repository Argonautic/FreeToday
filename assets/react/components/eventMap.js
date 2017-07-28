import React, { Component } from 'react';
import API_KEY from '../BingAPIKey'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createEvent } from '../actions/index'

function getCookie(name)
{
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?

            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxSetup({
     beforeSend: function(xhr, settings) {
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     }
});

class EventMap extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const map = new Microsoft.Maps.Map(this.refs.myMap, {
            credentials: API_KEY
        });

        const center = map.getCenter();

        let pin = new Microsoft.Maps.Pushpin(center, {
            title: 'Microsoft',
            subTitle: 'City Center',
            color: 'red',
        });

        let infobox = new Microsoft.Maps.Infobox(center, {
            visible: false,
            title: 'Map Center',
            description: 'Your Center',
            actions: [{
                label: "I'm in!",
                eventHandler: () => console.log("I'm in!"),
            }, {
                label: "Message host",
                eventHandler: () => console.log('Message host'),
            }]
        });

        infobox.setMap(map);
        map.entities.push(pin);

        Microsoft.Maps.Events.addHandler(map, 'click', (event) => (createEvent(map, event.location, infobox)));
    }

    render() {
        console.log(this.props.events);
        return (
            <div
                id="myMap"
                ref="myMap"
            />
        )
    }
}

function mapStateToProps({ events }) {
    return { events };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createEvent }, dispatch)
}

export default connect(mapStateToProps)(EventMap)
