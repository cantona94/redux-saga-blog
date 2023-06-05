import { LOAD_COMMENTS, SET_COMMENTS } from '../actions/comments';

const defaultState = {
  comments: {},
  loading: true,
}

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
      }      
    case SET_COMMENTS:
      const { postId } = action.payload[0];
      const newComments = {
        ...state.comments,
        [postId]: {
          blockComments: action.payload
        }
      }
      return { ...state, comments: newComments, loading: false }

    default:
      return state;
  }
}