import { all } from "redux-saga/effects";
import { postWatcher } from "./postSaga";
import { commentWatcher } from './commentSaga';
import { userWatcher } from './userSaga'

export function* rootWatcher() {
  yield all([postWatcher(), commentWatcher(), userWatcher()])
}