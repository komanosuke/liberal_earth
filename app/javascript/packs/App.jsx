//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const notyet_element = (
  <div>
    <img className="notyet" src="/assets/jap_coming.PNG" />
  </div>
);



var japanese_btn = document.getElementById("japanese_elem_1");
japanese_btn.addEventListener('click', function() {
  root.render(notyet_element);
});



{/*
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


*/}