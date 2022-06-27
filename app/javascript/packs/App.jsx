// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
import './App.css'

const root = ReactDOM.createRoot(
  document.getElementById('subjects')
);

const element = (
  <ul id="subjects">
    <li className="science_school">
      <a href="4_science_elem.html">小学校理科</a>
    </li>
    <li className="science_school">
      <a href="4_science_j_high.html">中学校理科</a>
    </li>
    <li className="science_school">
      <a href="4_science_high.html">高校理科</a>
    </li>
  </ul>
);




var btn = document.getElementById("btn");
btn.addEventListener('click', function() {
  root.render(element);
});