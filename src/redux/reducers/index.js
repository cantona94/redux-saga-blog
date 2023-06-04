import { combineReducers } from 'redux';
import postReducer from './posts/index';

const rootReducer = combineReducers({
  posts: postReducer,
})

export default rootReducer;