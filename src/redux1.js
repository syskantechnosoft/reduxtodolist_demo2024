import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
};

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

// Subscribe to store changes
store.subscribe(() => {
  console.log('State updated:', store.getState());
});

// Dispatch some actions
store.dispatch({ type: 'INCREMENT' }); // State updated: { count: 1 }
store.dispatch({ type: 'INCREMENT' }); // State updated: { count: 2 }
store.dispatch({ type: 'DECREMENT' }); // State updated: { count: 1 }
