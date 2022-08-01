import React from 'react';
import ReactDOM,{ hydrate, render } from 'react-dom';
// import './index.css';
import App from './App';

// ReactDOM.render(
// //   <React.StrictMode>
//     <App />
// //   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = document.getElementById("root")
var renderMethod
if (root && root.innerHTML !== "") {
  renderMethod = hydrate
} else {
  renderMethod = render
}
renderMethod(
  <App />,
  document.getElementById('root')
);
