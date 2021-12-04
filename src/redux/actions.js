import {DECREMENT, DISABLE, ENABLE, INCREMENT, TOGGLE_THEME} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disable())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enable())
        }, 2000)
    }
}

export function toggleTheme(newTheme) {
    return {
        type: TOGGLE_THEME,
        payload: newTheme
    }
}

export function disable() {
    return {
        type: DISABLE
    }
}

export function enable() {
    return {
        type: ENABLE
    }
}