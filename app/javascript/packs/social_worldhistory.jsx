//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


//社会
const notyet_element_social = (
  <>
  <h1>目次</h1>
    <div id="table_box">
    <ul className="table">
        <li><a href="#wh00">先史時代</a></li>
        <li><a href="#wh01">１、古代オリエント</a></li>
        <li><a href="#wh02">２、古代ギリシャ・共和政ローマ</a></li>
        <li><a href="#wh03">３、ローマ帝国とインド史</a></li>
        <li><a href="#wh04">４、ゲルマン民族・スラヴ民族・ビザンツ帝国</a></li>
        <li><a href="#wh05">５、西ヨーロッパ中世世界</a></li>
        <li><a href="#wh06">６、神聖ローマ帝国・新大陸・宗教改革</a></li>
        <li><a href="#wh07">７、ネーデルラントの独立・テューダー朝とスチュアート朝</a></li>
        <li><a href="#wh08">８、宗教戦争と絶対王政（フランス・ドイツ）</a></li>
        <li><a href="#wh09">９、ロシア絶対王政とアメリカ独立革命</a></li>
        <li><a href="#wh10">１０、フランス革命とナポレオン</a></li>
        <li><a href="#wh11">１１、中国史（～後漢）</a></li>
        <li><a href="#wh12">１２、中国史（～隋）</a></li>
        <li><a href="#wh13">１３、中国史（～南宋）</a></li>
        <li><a href="#wh14">１４、中国史（～明・永楽帝）</a></li>
        <li><a href="#wh15">１５、中国史（～清・乾隆帝）</a></li>
        <li><a href="#wh16">１６、朝鮮・東南アジア史</a></li>
        <li><a href="#wh17">１７、イスラーム史（～ウマイヤ朝）</a></li>
        <li><a href="#wh18">１８、イスラーム史（アッバース朝と分裂）</a></li>
        <li><a href="#wh19">１９、イスラーム王朝史（～オスマン朝）</a></li>
        <li><a href="#wh20">２０、ウィーン体制・産業革命</a></li>
        <li><a href="#wh21">２１、19世紀の英・伊・露・米国史</a></li>
        <li><a href="#wh22">２２、19世紀の中東・インド・東南アジア史</a></li>
        <li><a href="#wh23">２３、アフリカ分割・第一次世界大戦・ロシア革命</a></li>
        <li><a href="#wh24">２４、戦時の欧州・第二次世界大戦・冷戦</a></li>
        <li><a href="#wh25">２５、中国近現代史</a></li>
    </ul>
    </div>
  </>
);



//世界史
var worldhistory_link = document.getElementById("social_studies_high_worldhistory");
worldhistory_link.addEventListener('click', function() {
  root.render(notyet_element_social);
});