import React from 'react';
import ReactDOM from 'react-dom/client';
import First from './components/First';
import Second from './components/Second';
import InfoForm from './components/infoForm'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <First></First>
    <Second name="segundo" />
  </div>
);