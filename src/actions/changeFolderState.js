import {
    CHANGE_FOLDER_STATE
} from './types'

export const changeFolderState = (folder) => dispatch => {
    console.log('getting in here')
    dispatch({
        payload: folder,
        type: CHANGE_FOLDER_STATE
    })
}

