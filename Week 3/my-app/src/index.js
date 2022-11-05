import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Ex0 from './Components/Ex0/Hello'
import Ex01 from './Components/Ex0.1/Ex0-1'
import Ex02 from "./Components/Ex02/Ex02";
import MyButton from "./Components/Ex03/MyButton";
import MySection from "./Components/Ex03/MySection";
import Ex04 from "./Components/Ex04/Ex04";
import MyComponent from "./Components/Ex10/MyComponent";
import MyComponent11 from "./Components/Ex11/MyComponent";
import Ex30 from "./Components/Ex30/Ex30";

import Ex12 from '.'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}

    {/*  <Ex0/>*/}

    {/*  <Ex01/>*/}

    {/*  <Ex02/>*/}

    {/*  <MyButton/>*/}
    {/*  <MySection/>*/}

    {/*  <Ex04/>*/}

    {/*<MyComponent/>*/}

    {/*<MyComponent11/>*/}

      <Ex30/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
