import React from "react";
import '../css/Summary.css';

class Summary extends React.Component {


render() {
  return (
    <div className="Summary" id="Summary">
      <div className="container"> 
        <h2 className="title">Summary</h2>
         <h3 className="topic">Career</h3>
             <div className="item-center">
                 <table>
           <tr><td>2014/03</td> <th> 青森県立田子高等学校　卒業</th></tr>
           <tr><td>　　/04 </td><th>東海大学政治経済学部経済学科　入学</th></tr>
           <tr><td>2017/09 </td><th>東海大学　中退</th></tr>
           <tr><td>　　/10 </td><th>青森県の実家で農業</th></tr>
           <tr><td>　</td><th></th></tr>
           <tr><td>2020/07 </td><th>WordPressでVODアフィリエイトブログを作成(現在は閉鎖）</th></tr>
           <tr><td>　　/10 </td><th>神奈川県で株式会社フルキャストに派遣従業員登録</th></tr>
           <tr><td>2021/06 </td><th>プログラミング学習を開始　Webエンジニアを目指し就職活動中</th></tr>
           </table>
            </div>
          <h3 className="topic">History</h3>
         <div className="item-center">
            青森県で18年間を過ごし、大学進学を機に神奈川県へ移住しました。
            家庭の都合により大学4年の秋セメスターを前に中退。<br></br>
            青森県の実家へ戻り農業で生活していました。家庭状況の安定に伴い、神奈川県へ再度移住。<br></br>
            派遣登録をして生活していましたが、これまでの経験をもっと活かせる場があると思い、<br></br>
            プログラミングを学習するとともにWebエンジニアを目指し就職活動を行っております。
         </div>
      </div> 
    </div>
  );
}
}

export default Summary;
