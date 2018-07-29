/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import { reducer as formReducer } from 'redux-form/immutable';
import globalReducer from 'containers/App/reducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    global: globalReducer,
    form: formReducer,
    ...injectedReducers,
  });
}
