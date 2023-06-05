import { LOAD_POSTS, SET_POSTS } from './actions';

const defaultState = {
  posts: [],
  page: 1,
  limit: 3,
  loading: true
}

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      const { page, limit } = action.payload;
      return {
        ...state,
        page,
        limit,
        loading: true,
      }
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false }

    default:
      return state;
  }
}