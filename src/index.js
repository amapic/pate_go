import React from 'react';
import ReactDOM,{ hydrate, render } from 'react-dom';
// import './index.css';
import Appsfdfh from './App';

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
  <Appsfdhjhhfh />,
  document.getElementById('root')
);
