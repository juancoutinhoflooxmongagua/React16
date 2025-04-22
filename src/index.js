import React from 'react';
import ReactDOM from 'react-dom/client';
import First from './components/First';
import Second from './components/Second';
import childrenComponent from './components/childrenComponent';
import fatherComponent from './components/fatherComponent'
import InfoForm from './components/infoForm'
import Status from './components/Status'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <InfoForm tipo="Dev" nome="Juan" />
    <Status.Ligado nome="Juan" />
    <Status.Desligado nome="Juan" />
  </React.StrictMode>
)