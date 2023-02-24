import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Props/DataPassParentTochild/Parent';
// import Home from './Home'
import Parent1 from './Props/PropsDataPassChildToParent/Parent1';
import UseEffect from './UseEffect';
import ControlledComp from './ControlledComp';
import UncontrolledComp from './UncontrolledComp';
import Map from './ConditionalRendering/Map';
import Parent11 from './ContextApi/Parent11';
import ReduxExample from './Redux/ReduxExample';
import FetchApi from './FetchApi/FetchApi';
import ComA from './UseContext/ComA';
import ComC from './UseContext/ComC';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Map/>
{/* <ComC/> */}
    {/* <ReduxExample/> */}
    {/* <UncontrolledComp/> */}
   {/* <Parent11/> */}
    {/* <ControlledComp/> */}
    {/* <App /> */}
 {/* <Home/> */}
 {/* <parent/> */}
 {/* <Parent/> */}
{/* <Parent1/> */}
{/* <UseEffect/> */}
{/* <FetchApi/> */}
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
