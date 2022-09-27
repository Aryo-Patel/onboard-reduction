import {
    CHANGE_FOLDER_STATE
} from '../actions/types';

const initialState = {
    "server" : true,
    "client": true
}

export default function(state = initialState, action) {
    const {payload, type} = action;

    switch(type){
        case CHANGE_FOLDER_STATE:
            let folderState = state;
            folderState[payload] = !folderState[payload]
            return folderState
        default:
            return state
    }
}