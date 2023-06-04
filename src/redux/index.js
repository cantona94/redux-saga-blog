import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

sagaMiddleware.run(rootWatcher);

export default store;