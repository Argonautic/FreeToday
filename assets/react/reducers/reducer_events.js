import { FETCH_EVENTS } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_EVENTS:
            // never mutate state. The ... will add all contents of state
            // into a new array containing action.payload.data in front
            return [ action.payload.data, ...state ];
    }
    return state;
}
