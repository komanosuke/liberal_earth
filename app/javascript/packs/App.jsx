//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
import {useState} from 'react'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);


const japanese_element = (
  <ul id="subjects">
    <li className="japanese_school">
      <a id="japanese_elem_sub">小学校国語</a>
    </li>
    <li className="japanese_school">
      <a id="japanese_j_high_sub">中学校国語</a>
    </li>
    <li className="japanese_school">
      <a id="japanese_high_sub">高校国語</a>
    </li>
  </ul>
);


const japanese_element_elem = (
  <ul id="subjects">
    <li className="japanese_school">
        <a id="japanese_elem_1">小１国語</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_elem_2">小２国語</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_elem_3">小３国語</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_elem_4">小４国語</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_elem_5">小５国語</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_elem_6">小６国語</a>
    </li>
  </ul>
);

const japanese_element_j_high = (
  <ul id="subjects">
    <li className="japanese_school">
        <a id="japanese_j_high_modern">中学校 現代文</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_j_high_old">中学校 古文・漢文</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_j_high_gram">中学校 文法</a>
    </li>
  </ul>
);

const japanese_element_high = (
  <ul id="subjects">
    <li className="japanese_school">
        <a id="japanese_high_modern">高校 現代文</a>
    </li>
    <li className="japanese_school">
        <a id="japanese_high_old">高校 古典</a>
    </li>
  </ul>
);

var japanese_btn = document.getElementById("japanese_top_page");
japanese_btn.addEventListener('click', function() {
  root.render(japanese_element);
});


var japanese_btn_elem = document.getElementById("japanese_elem");
japanese_btn_elem.addEventListener('click', function() {
  root.render(japanese_element_elem);
});
var japanese_btn_j_high = document.getElementById("japanese_j_high");
japanese_btn_j_high.addEventListener('click', function() {
  root.render(japanese_element_j_high);
});
var japanese_btn_high = document.getElementById("japanese_high");
japanese_btn_high.addEventListener('click', function() {
  root.render(japanese_element_high);
});





const math_element = (
  <ul id="subjects">
    <li className="math_school">
      <a id="math_elem">小学校算数</a>
    </li>
    <li className="math_school">
      <a id="math_j_high">中学校数学</a>
    </li>
    <li className="math_school">
      <a id="math_high">高校数学</a>
    </li>
  </ul>
);


const math_element_elem = (
  <ul id="subjects">
    <li className="math_school">
        <a id="math_elem_1">小１算数</a>
    </li>
    <li className="math_school">
        <a id="math_elem_2">小２算数</a>
    </li>
    <li className="math_school">
        <a id="math_elem_3">小３算数</a>
    </li>
    <li className="math_school">
        <a id="math_elem_4">小４算数</a>
    </li>
    <li className="math_school">
        <a id="math_elem_5">小５算数</a>
    </li>
    <li className="math_school">
        <a id="math_elem_6">小６算数</a>
    </li>
  </ul>
);

const math_element_j_high = (
  <ul id="subjects">
    <li className="math_school">
        <a id="math_j_high_1">中１数学</a>
    </li>
    <li className="math_school">
        <a id="math_j_high_2">中２数学</a>
    </li>
    <li className="math_school">
        <a id="math_j_high_3">中３数学</a>
    </li>
  </ul>
);

const math_element_high = (
  <ul id="subjects">
    <li className="math_school">
        <a id="math_high_1A2B">数学IAⅡB</a>
    </li>
    <li className="math_school">
        <a id="math_high_3C">数学ⅢC</a>
    </li>
  </ul>
);

var math_btn = document.getElementById("math_top_page");
math_btn.addEventListener('click', function() {
  root.render(math_element);
});


  var math_btn_elem = document.getElementById("math_elem");
  math_btn_elem.addEventListener('click', function() {
    root.render(math_element_elem);
  });
  var math_btn_j_high = document.getElementById("math_j_high");
  math_btn_j_high.addEventListener('click', function() {
    root.render(math_element_j_high);
  });
  var math_btn_high = document.getElementById("math_high");
  math_btn_high.addEventListener('click', function() {
    root.render(math_element_high);
  });









const social_element = (
  <ul id="subjects">
    <li className="social_school">
      <a id="social_elem">小学校社会</a>
    </li>
    <li className="social_school">
      <a id="social_j_high">中学校社会</a>
    </li>
    <li className="social_school">
      <a id="social_high">高校社会</a>
    </li>
  </ul>
);

const social_element_elem = (
  <ul id="subjects">
    <li className="social_school">
        <a id="social_elem_3">小３社会</a>
    </li>
    <li className="social_school">
        <a id="social_elem_4">小４社会</a>
    </li>
    <li className="social_school">
        <a id="social_elem_5">小５社会</a>
    </li>
    <li className="social_school">
        <a id="social_elem_6">小６社会</a>
    </li>
  </ul>
);

const social_element_j_high = (
  <ul id="subjects">
    <li className="social_school">
        <a id="social_j_high_1">地理</a>
    </li>
    <li className="social_school">
        <a id="social_j_high_2">歴史</a>
    </li>
    <li className="social_school">
        <a id="social_j_high_3">公民</a>
    </li>
  </ul>
);

const social_element_high = (
  <ul id="subjects">
    <li className="social_school">
        <a id="social_high_worldhistory">世界史</a>
    </li>
    <li className="social_school">
        <a id="social_high_japanesehistory">日本史</a>
    </li>
    <li className="social_school">
        <a id="social_high_geography">地理</a>
    </li>
    <li className="social_school">
        <a id="social_high_ethics">倫理</a>
    </li>
    <li className="social_school">
        <a id="social_high_poleco">政治経済・現代社会</a>
    </li>
  </ul>
);

var social_btn = document.getElementById("social_top_page");
social_btn.addEventListener('click', function() {
  root.render(social_element);
});

var social_btn_elem = document.getElementById("social_elem");
social_btn_elem.addEventListener('click', function() {
  root.render(social_element_elem);
});
var social_btn_j_high = document.getElementById("social_j_high");
social_btn_j_high.addEventListener('click', function() {
  root.render(social_element_j_high);
});
var social_btn_high = document.getElementById("social_high");
social_btn_high.addEventListener('click', function() {
  root.render(social_element_high);
});










const science_element = (
  <ul id="subjects">
    <li className="science_school">
      <a id="science_elem">小学校理科</a>
    </li>
    <li className="science_school">
      <a id="science_j_high">中学校理科</a>
    </li>
    <li className="science_school">
      <a id="science_high">高校理科</a>
    </li>
  </ul>
);


const science_element_elem = (
  <ul id="subjects">
    <li className="science_school">
        <a id="science_elem_3">小３理科</a>
    </li>
    <li className="science_school">
        <a id="science_elem_4">小４理科</a>
    </li>
    <li className="science_school">
        <a id="science_elem_5">小５理科</a>
    </li>
    <li className="science_school">
        <a id="science_elem_6">小６理科</a>
    </li>
  </ul>
);

const science_element_j_high = (
  <ul id="subjects">
    <li className="science_school">
        <a id="science_j_high_1">中１理科</a>
    </li>
    <li className="science_school">
        <a id="science_j_high_2">中２理科</a>
    </li>
    <li className="science_school">
        <a id="science_j_high_3">中３理科</a>
    </li>
  </ul>
);

const science_element_high = (
  <ul id="subjects">
    <li className="science_school">
        <a id="science_high_physics">物理</a>
    </li>
    <li className="science_school">
        <a id="science_high_chemistry">化学</a>
    </li>
    <li className="science_school">
        <a id="science_high_biology">生物</a>
    </li>
    <li className="science_school">
        <a id="science_high_geology">地学</a>
    </li>
  </ul>
);

var science_btn = document.getElementById("science_top_page");
science_btn.addEventListener('click', function() {
  root.render(science_element);
});

var science_btn_elem = document.getElementById("science_elem");
science_btn_elem.addEventListener('click', function() {
  root.render(science_element_elem);
});
var science_btn_j_high = document.getElementById("science_j_high");
science_btn_j_high.addEventListener('click', function() {
  root.render(science_element_j_high);
});
var science_btn_high = document.getElementById("science_high");
science_btn_high.addEventListener('click', function() {
  root.render(science_element_high);
});












const english_element = (
  <ul id="subjects">
    <li className="english_school">
      <a id="english_elem">小学校英語</a>
    </li>
    <li className="english_school">
      <a id="english_j_high">中学校英語</a>
    </li>
    <li className="english_school">
      <a id="english_high">高校英語</a>
    </li>
  </ul>
);


const english_element_elem = (
  <ul id="subjects">
    <li className="english_school">
        <a id="english_elem_3_6">小３〜６英語</a>
    </li>
    <li className="english_school">
        <a id="english_elem_voca">小学校 英単語</a>
    </li>
  </ul>
);

const english_element_j_high = (
  <ul id="subjects">
    <li className="english_school">
        <a id="english_j_high_1">中１英語</a>
    </li>
    <li className="english_school">
        <a id="english_j_high_2">中２英語</a>
    </li>
    <li className="english_school">
        <a id="english_j_high_3">中３英語</a>
    </li>
  </ul>
);

const english_element_high = (
  <ul id="subjects">
    <li className="english_school">
        <a id="english_high_listening">聴く</a>
    </li>
    <li className="english_school">
        <a id="english_high_reading">読む</a>
    </li>
    <li className="english_school">
        <a id="english_high_speaking">話す</a>
    </li>
    <li className="english_school">
        <a id="english_high_writing">書く</a>
    </li>
    <li className="english_school">
        <a id="english_high_grammar">文法</a>
    </li>
    <li className="english_school">
        <a id="english_high_voca">英単語</a>
    </li>
  </ul>
);

var english_btn = document.getElementById("english_top_page");
english_btn.addEventListener('click', function() {
  root.render(english_element);
});

var english_btn_elem = document.getElementById("english_elem");
english_btn_elem.addEventListener('click', function() {
  root.render(english_element_elem);
});
var english_btn_j_high = document.getElementById("english_j_high");
english_btn_j_high.addEventListener('click', function() {
  root.render(english_element_j_high);
});
var english_btn_high = document.getElementById("english_high");
english_btn_high.addEventListener('click', function() {
  root.render(english_element_high);
});



