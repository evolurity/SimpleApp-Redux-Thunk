import {DECREMENT, DISABLE, ENABLE, INCREMENT, TOGGLE_THEME} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    if (action.type === TOGGLE_THEME) {
        return {...state, value: action.payload}
    } else if (action.type === DISABLE) {
        return {...state, disabled: true}
    } else if (action.type === ENABLE) {
        return {...state, disabled: false}
    }

    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})