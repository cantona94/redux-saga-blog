import { all } from "redux-saga/effects";
import { postWatcher } from "./postSaga";
import { commentWatcher } from './commentSaga';

export function* rootWatcher() {
  yield all([postWatcher(), commentWatcher()])
}