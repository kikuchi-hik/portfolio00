import React from "react";
import '../css/Studies.css';
import css3 from '../img/css-3.svg';
import html5 from '../img/html-5.svg';
import js5 from '../img/javascript.svg';
import python from '../img/python.svg';
import react from '../img/react.svg';
import R from '../img/r-lang.svg';
import typescript from '../img/typescript.svg';

class Studies extends React.Component {

render () {
  return (
    <div className="Studies" id="Studies">
     <div className="container">
       <h2 className="title">Studies</h2>
        <h3 className="topic">初期学習済みの言語</h3>
        <div className="study-list">
          <div className="row">
             <div className="col-md-3">
                 <img src ={html5} className="img" alt="img"/>
                 <p class="txt-contents">HTML</p>
             </div>

             <div className="col-md-3">
               <img src ={css3} className="img" alt="img"/>
               <p class="txt-contents">CSS</p>
             </div>

             <div className="col-md-3">
               <img src ={js5} className="img" alt="img"/>
               <p class="txt-contents">JavaScript</p>
             </div>

             <div className="col-md-3">
               <img src ={react} className="img" alt="img"/>
               <p class="txt-contents">React</p>
             </div>
           </div>
        </div>

        <h3 className="topic">学習予定の言語</h3>
       <div className="study-list">
         <div className="row">
            <div className="col-md-4">
             <img src ={typescript} className="img" alt="img"/>
             <p class="txt-contents">TypeScript</p>
            </div>

            <div className="col-md-4">
             <img src ={python} className="img" alt="img"/>
             <p class="txt-contents">Python</p>
            </div>

            <div className="col-md-4">
             <img src ={R} className="img" alt="img"/>
             <p class="txt-contents">R</p>
            </div>
         </div>
        </div>
          <div>
           
          </div>
      </div>  
    </div>
  );
}
}

export default Studies;