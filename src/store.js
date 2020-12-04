import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  jobDetailsReducer,
  jobLatestReducer,
  jobListReducer,
} from './reducers/jobReducers';

const initialState = {  };
const reducer = combineReducers({
  jobList: jobListReducer,
  jobDetails: jobDetailsReducer,
  jobLatest: jobLatestReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
