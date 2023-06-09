import { LOAD_POSTS, SET_POSTS } from '../actions/posts';

const defaultState = {
  posts: [],
  page: 1,
  limit: 3,
  postTitle: '',
  sortPosts: '',
  userId: null,
  loading: true
}

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      const { page, postTitle, sortPosts, userId } = action.payload;
      return {
        ...state,
        page,
        postTitle,
        sortPosts,
        userId,
        loading: true,
      }
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false }

    default:
      return state;
  }
}