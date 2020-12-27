// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './AppMain'
import AppUpload from './AppUpload'

// React component 1
ReactDOM.render(
    <React.StrictMode>
      <AppMain />
    </React.StrictMode>,
    document.getElementById('root')
  );


  // React component 2
ReactDOM.render(
  <React.StrictMode>
    <AppUpload />
  </React.StrictMode>,
  document.getElementById('rootUpload')
);
