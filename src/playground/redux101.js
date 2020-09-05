import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});
const decrementCount = ( { decrementBy = 1 }={} ) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});
const reset = () => ({
    type: 'RESET'
});
const set = (count) => ({
    type: 'SET',
    count: count
});

//reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy
            }
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            }
        }
        case 'RESET': {
            return {
                count: 0
            }
        }
        case 'SET': {
            return {
                count: action.count
            }
        }
        default: {
            return state;
        }
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(reset());

store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(set(101));

 unsubscribe();