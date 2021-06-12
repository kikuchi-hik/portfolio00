import React, { Component } from "react";
import "../css/App.css";

import Home from "./Home";
import Profile from './Profile';
import Summary from './Summary';
import Studies from './Studies';
import Contact from './ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <testNav />
        <Home
          title="Home"
          dark={true}
          id="Home"
        />
        <Profile
          title="Profile"
          dark={false}
          id="Profile"
        />
        <Summary
          title="Summary"
          dark={true}
          id="Summary"
        />
        <Studies
          title="Studies"
          dark={false}
          id="Studies"
        />
        <Contact
          title="Contact"
          dark={true}
          id="Contact"
        />
      </div>
    );
  }
}

export default App;