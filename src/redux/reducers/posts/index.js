import { LOAD_POSTS, SET_POSTS } from './actions';

const defaultState = {
  posts: [],
  loading: true
}

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true,
      }
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false }

    default:
      return state;
  }
}