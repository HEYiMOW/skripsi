/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import logo from './images/coba1.png';
import './css/App.css';
import kopi from "./images/coffee.gif";
import React from 'react';



function Bas() {
  return (
    
    <body>
      <nav class="navbar">
        <div class="logo"><img src={logo} width="150px"/></div>
        <a href="#" class="toggle-button">
          <i class="fas fa-bars"></i>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="/" title="Link home">Home</a></li>
            <li><a href="#" title="Link favorite">News</a></li>
            <li><a href="" target="_blank">Coffeeshops</a></li>
          </ul>
        </div>
      </nav>
      <div class="kopiku"><img src={kopi} width="150px"/></div>
        <footer>
        <a> Copyright 2022/2023 &copy; Owen Ingin Semhas</a>
    </footer>
    </body>

    
  );
}

export default Bas;
