import { FETCH_EVENTS, CREATE_EVENT } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case CREATE_EVENT:
            return [ action.payload.data, ...state ]
        case FETCH_EVENTS:
            return [ action.payload.data ];
    }
    return state;
}
