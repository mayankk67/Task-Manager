import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';

//const middleware=[thunk];

const middleware = [thunk];
const allReducers= combineReducers({root:rootReducer});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
