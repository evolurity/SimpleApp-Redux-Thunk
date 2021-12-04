import '../styles.css'

const state = {
    counter: 0
}
const setState = (value) => {
    state.counter = value;
    render()
}
const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');


function render() {
    counter.innerHTML = state.counter;
}

addBtn.addEventListener('click', () => {
    const newState = state;
    const value = ++newState.counter
    setState(value)
})
subBtn.addEventListener('click', () => {
    const newState = state;
    const value = --newState.counter;
    setState(value)
})
asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        const newState = state;
        const value = ++newState.counter
        setState(value)
    }, 2000)
})
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
render()
