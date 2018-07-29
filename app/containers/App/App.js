/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import SampleForm from 'components/SampleForm';
import './style.scss';

const App = (props) => (
  <div className="app-wrapper">
    <SampleForm formValues={props.formValues} />
  </div>
);

export default App;