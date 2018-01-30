import {applyMiddleware, createStore} from "redux";
import rootReducer from "../redecers";
import reduxImmutableStateInvariant  from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
