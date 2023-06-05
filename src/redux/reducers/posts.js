import { LOAD_POSTS, SET_POSTS } from '../actions/posts';

const defaultState = {
  posts: [],
  page: 1,
  limit: 3,
  postTitle: '',
  sortPosts: '',
  loading: true
}

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      const { page, limit, postTitle, sortPosts } = action.payload;
      return {
        ...state,
        page,
        limit,
        postTitle,
        sortPosts,
        loading: true,
      }
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false }

    default:
      return state;
  }
}