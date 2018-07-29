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

const App = () => (
  <div className="app-wrapper">
    <SampleForm/>
  </div>
);

export default App;