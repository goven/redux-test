const redux = require('redux')
//2. create a reducer
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
}
// 1. create a store
const store = redux.createStore(counterReducer)
// 3. create a subscriber
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}
//4.subscribe the store
store.subscribe(counterSubscriber)

//5.dispatch actions
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})