import React, { Component } from 'react';
import API_KEY from '../BingAPIKey'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createEvent, fetchEvents } from '../actions/index'

class EventMap extends Component {

    constructor(props) {
        super(props);

        this.infobox;
        this.map;

        this.props.fetchEvents();
    }

    prepareEvent(location) {
        let newPinOptions = {
            title: 'Your New Event!',
            subTitle: 'General Event',
            color: 'green'
        };

        let newPin = new Microsoft.Maps.Pushpin(location, newPinOptions);
        this.map.entities.push(newPin);

        this.infobox.setOptions({
            location,
            visible: true,
            title: "Your New Event!",
            description: "Your Event Description Here",
            actions: [{
                label: "I'm in!",
                eventHandler: () => this.props.createEvent(location, infobox),
            }, {
                label: "Message host",
                eventHandler: () => console.log('Message host'),
            }]
        });
    }

    componentDidMount() {
        this.props.fetchEvents().then(() => console.log(this.props.events));

        this.map = new Microsoft.Maps.Map(this.refs.myMap, {
            credentials: API_KEY
        });

        const center = this.map.getCenter();

        this.infobox = new Microsoft.Maps.Infobox(center, {
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
        this.infobox.setMap(this.map);

        Microsoft.Maps.Events.addHandler(this.map, 'click', (event) => (this.prepareEvent(event.location)));

        /*this.props.fetchEvents().then(() => {
            for (let i = 0; i < this.props.events.length; i++) {
                event = this.props.event[i];
                location = new Microsoft.Maps.Location(events.lat, events.lon);
                let newPinOptions = {
                    title: 'Your New Event!',
                    subTitle: 'General Event',
                    color: 'green'
                };
                let newPin = new Microsoft.Maps.Pushpin(location, newPinOptions);
                this.map.entities.push(newPin);
            }
        });*/
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

function mapStateToProps({ events }) {
    return { events };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createEvent, fetchEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventMap)
