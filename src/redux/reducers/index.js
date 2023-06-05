import { combineReducers } from 'redux';
import postReducer from './posts';
import commentReducer from './comments';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
})

export default rootReducer;