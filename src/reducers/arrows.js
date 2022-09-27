import {
    CHANGE_ARROW_STATE
} from '../actions/types';

const initialState = {
    "database-frontend" : true,
    "routes-frontend": true,
    "server-client": false,
    "components-frontend": true,
    "database-client": false,
    "routes-client":false
}

export default function(state = initialState, action) {
    const {payload, type} = action;

    switch(type){
        case CHANGE_ARROW_STATE:
            state = payload
            return state
        default:
            return state
    }
}