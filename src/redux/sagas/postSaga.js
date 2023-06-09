import { put, takeEvery, call, delay, select } from "redux-saga/effects";
import { LOAD_POSTS, SET_POSTS } from "../actions/posts";
import { SET_POSTS_ERROR } from "../actions/errors";
import { axiosPostsFromApi } from "../../api/index";
import { selectPosts } from "../selectors";

function* axiosPostWorker({ payload }) {
  try {
    yield delay(500);
    const { page, postTitle, sortPosts, userId } = payload;
    const postsData = yield select(selectPosts);
    const data = yield call(axiosPostsFromApi, page, postsData.limit, postTitle, sortPosts, userId);
    const posts = yield call(() => new Promise(res => res(data)))
    yield put({
      type: SET_POSTS,
      payload: posts,
    });
  } catch {
    yield put({ type: SET_POSTS_ERROR, payload: 'Error fetching posts' })
  }
}

export function* postWatcher() {
  yield takeEvery(LOAD_POSTS, axiosPostWorker)
}