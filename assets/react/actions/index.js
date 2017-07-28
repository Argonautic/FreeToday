import axios from 'axios';

const ROOT_URL = "http://localhost:8000/api/";
/*const current_user =  $.ajax({
    method: 'GET',
    url: `${ROOT_URL}/users/current/`,
});*/

const current_user = axios.get(`${ROOT_URL}/users/current/`);

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const mytoken = getCookie('csrftoken')

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

export function fetchEvents() {
    const request = axios.get(`${ROOT_URL}events/`);

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function createEvent(map, location, infobox) {

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

    /*const request = $.ajax({
        method: 'POST',
        url: 'http://localhost:8000/api/events/',
        datatype: 'json',
        headers: {"X-CSRFToken": mytoken},
        data: {
            owner: current_user.target,
            name: "Your New Event",
            description: "Your Event Description",
            lat: location.latitude,
            lon: location.longitude
        }
    });*/

    const request = axios({
        method: 'post',
        headers: {"X-CSRFToken": mytoken},
        url: 'http://localhost:8000/api/events/',
        data: {
            owner: current_user.target,
            name: "Your New Event",
            description: "Your Event Description",
            lat: location.latitude,
            lon: location.longitude
        }
    });

    console.log(request);

    return {
        type: CREATE_EVENT,
        payload: request
    }
}