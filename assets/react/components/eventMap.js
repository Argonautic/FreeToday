import React, { Component } from 'react';
import API_KEY from '../BingAPIKey'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EventMap extends Component {

    constructor(props) {
        super(props)
    }

    getPinDetails(pin) {
        return pin.getColor();
    }

    createNewPin(map, location, infobox) {
        let newPinOptions = {
            title: 'Your New Event!',
            subTitle: 'General Event',
            color: 'green'
        };
        let newPin = new Microsoft.Maps.Pushpin(location, newPinOptions);
        map.entities.push(newPin);

        infobox.setOptions({
            location,
            visible: true,
            title: "Your New Event!",
            description: "Your Event Description Here",
            actions: [{
                label: "I'm in!",
                eventHandler: () => console.log("I'm in!"),
            }, {
                label: "Message host",
                eventHandler: () => console.log('Message host'),
            }]
        });
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

        Microsoft.Maps.Events.addHandler(map, 'click', (event) => (this.createNewPin(map, event.location, infobox)));
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

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ fetchEvents }, dispatch)
//}

export default connect(mapStateToProps)(EventMap)
