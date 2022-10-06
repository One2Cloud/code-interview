import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Q1Page from "./Pages/q1";
import Q2Page from "./Pages/q2";
import Q3Page from "./Pages/q3";
import Q4Page from "./Pages/q4";
import Q5Page from "./Pages/q5";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/q1" element={<Q1Page/>}/>
                <Route path="/q2" element={<Q2Page/>}/>
                <Route path="/q3" element={<Q3Page/>}/>
                <Route path="/q4" element={<Q4Page/>}/>
                <Route path="/q5" element={<Q5Page/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
