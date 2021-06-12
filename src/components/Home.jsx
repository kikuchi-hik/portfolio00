import React from "react";
import '../css/Home.css';
import logo from '../img/logo.svg';


class Home extends React.Component {

render() {
  return (
    <div className="Home">
      <div className="Home-header">
       <div className="title">
        <h1 className="Home-title">
          Kikuchi's<br/>
          Portfolio<br/>
          <div className='subTitle'>
          Created using React<img src={logo} className="App-logo" alt="logo" />
          </div>
        </h1>
        </div>
      </div>
    </div>
  );
}
}

export default Home;
