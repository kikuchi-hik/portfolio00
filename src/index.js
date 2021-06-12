import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import NavBar from './components/Navbar';
import Home from './components/Home.jsx';
import Profile from './components/Profile';
import Summary from './components/Summary';
import Studies from './components/Studies';
import ContactForm from './components/ContactForm';


ReactDOM.render(
  <React.StrictMode >
    <NavBar />
    <Home />
    <Profile />
    <Summary />
    <Studies />
    <ContactForm />
  </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

