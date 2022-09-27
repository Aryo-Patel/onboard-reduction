import {
    CHANGE_ARROW_STATE
} from './types'

export const changeArrowState = arrowDict => dispatch => {
    dispatch({
        payload: arrowDict,
        type: CHANGE_ARROW_STATE
    })
}

