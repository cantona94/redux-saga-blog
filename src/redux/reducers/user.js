import { LOAD_USER, SET_USER } from '../actions/user';

const defaultState = {
  users: [],
  userId: null,
  loading: true,
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_USER:
      const { userId } = action.payload;
      return {
        ...state,
        userId,
        loading: true,
      }
    case SET_USER:
      return { ...state, users: action.payload, loading: false }

    default:
      return state;
  }
}