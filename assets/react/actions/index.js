import axios from 'axios';

// for Google Maps API
const GOOGLE_API_KEY = "AIzaSyAOmUnDSxOr2wq9WYFPMoELIeA6p39PrfU";

const ROOT_URL = "http://localhost:8000/api/events/";
export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}