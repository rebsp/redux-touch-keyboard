/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

const selectGlobal = (state) => state.get('global');

const selectState = (state) => state;

const formValues = formValueSelector('sample');

const makeSelectFormValues = () => createSelector(
  selectState,
  (state) => formValues(state, 'username', 'email', 'age')
)

export {
  makeSelectFormValues
};
