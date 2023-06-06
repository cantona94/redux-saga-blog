import { combineReducers } from 'redux';
import postReducer from './posts';
import commentReducer from './comments';
import userReducer from './user';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  user: userReducer,
})

export default rootReducer;