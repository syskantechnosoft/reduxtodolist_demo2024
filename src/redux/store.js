import { createStore } from 'redux';
import todoReducer from './todoReducer';

// const store = createStore(todoReducer);
const store = createStore(
    todoReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

export default store;
