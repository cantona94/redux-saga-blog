import { combineReducers } from 'redux';
import postReducer from './posts';
import commentReducer from './comments';
import userReducer from './user';
import errorReducer from './errors';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  user: userReducer,
  errors: errorReducer,
})

export default rootReducer;