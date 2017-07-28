import axios from 'axios';

const ROOT_URL = "http://localhost:8000/api/";
const current_user = axios.get(`${ROOT_URL}/users/current/`).target;

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const mytoken = getCookie('csrftoken');

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

export function fetchEvents() {
    const request = axios.get(`${ROOT_URL}events/`);

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function createEvent(location, infobox) {

    /*infobox.setOptions({
        actions[0].label = "Signed up!";
    });*/

    const request = axios({
        method: 'post',
        headers: {"X-CSRFToken": mytoken},
        url: `${ROOT_URL}events/`,
        data: {
            owner: current_user,
            name: "Your New Event",
            description: "Your Event Description",
            lat: location.latitude,
            lon: location.longitude
        }
    });

    return {
        type: CREATE_EVENT,
        payload: request
    }
}