import './styles.css'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/reducers";
import {asyncIncrement, decrement, increment, toggleTheme} from "./redux/actions";
import {logger} from "redux-logger/src";

// My middleware 'Logger'
// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('State', state);
//             console.log('Action', action);
//             return next(action)
//         }
//     }
// }

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, logger)))

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light ';
    store.dispatch(toggleTheme(newTheme))
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState();
    counter.innerHTML = state.counter;
    document.body.className = state.theme.value;
    [addBtn, subBtn, themeBtn].forEach(btn => btn.disabled = state.theme.disabled)
})

store.dispatch({type: 'INIT_APPLICATION'})

