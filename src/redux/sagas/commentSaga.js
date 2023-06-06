import { put, takeEvery, call, delay } from "redux-saga/effects";
import { LOAD_COMMENTS, SET_COMMENTS } from "../actions/comments";
import { SET_COMMENTS_ERROR } from "../actions/errors";
import { axiosCommentsFromApi } from "../../api/index";

function* axiosCommentWorker({ payload }) {
  try {
    yield delay(500);
    const { postId } = payload;
    const data = yield call(axiosCommentsFromApi, postId);
    const comments = yield call(() => new Promise(res => res(data)));
    yield put({
      type: SET_COMMENTS,
      payload: comments.data,
    });
  } catch {
    yield put({ type: SET_COMMENTS_ERROR, payload: 'Error fetching comments' })
  }
}

export function* commentWatcher() {
  yield takeEvery(LOAD_COMMENTS, axiosCommentWorker)
}