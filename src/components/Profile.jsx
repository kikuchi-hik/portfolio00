import React from "react";
import '../css/Profile.css';
import human from '../img/prof-img.png';
import "animate.css/animate.min.css";

import gitlogo from '../img/git-logo.png';
import twilogo from '../img/twi-logo.svg';






class Profile extends React.Component {

render() {
  return (
    <div className="Profile" id="Profile">
      <div className="animate">
       <div className="container"> 
         <h2 className="title">
          Profile
         </h2>
        <div className="Prof-items">
        <div className="row">
           <div className="col-md mb-5">
             <img src ={human} className="human" alt="human"/>
           </div>
           <div className="col-md">
             <ul className="Prof-list">
             <h3 className="topic">About me</h3>
             <li>氏名：菊地　光輝</li>
             <li>年齢：26歳</li>
             <li>出身地：青森県</li>
             <li>居住地：神奈川県</li>
             <li>趣味:雑学集め</li>
             <li>SNS: 
             <a href="https://twitter.com/web_hik"target="_blank" rel="noopener noreferrer"><img src={twilogo} className="sns-icon" alt="logo" /></a> 
             <a href="https://github.com/kikuchi-hik"target="_blank" rel="noopener noreferrer"><img src={gitlogo} className="sns-icon" alt="logo" /></a></li>
             <li><br></br>ポートフォリオをご覧いただきありがとうございます。
               このサイトはcreate-react-appの状態からHTML/CSS,Reactを用いて作成しました。
               学習開始から完成まで2週間ほどでまだまだ改善点も多くありますが、
               他サービス開発にも役立つ技術を研究し、より良いものを作っていきます。</li>
             </ul>           
           </div>
           </div>
        </div> 
      </div>
      </div>
    </div>
  );
  }
}

export default Profile;