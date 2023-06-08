/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import hero from './images/logo.png';
import logo from './images/coba1.png';
import coffee from "./images/coffeeshop.png";
import baswara from "./images/baswara.jpg";
import nogpi from "./images/nogpi.jpg";
import tlmy from "./images/tlmy.jpg"
import './css/App.css';
import './js/system.js';
import baswarafix from "./images/baswara fix.png"
import nogpifix from "./images/nogpi fix.png"
import tlmyfix from "./images/telomoyo fix.png"
import React from 'react'
import { BrowserRouter as Route, Router,} from 'react-router-dom/cjs/react-router-dom.min';
import bas from "./Bas";
import { Link } from 'react-router-dom/cjs/react-router-dom';


function App() {
  return (
    
    <body>
      <Router>
        <Route exact path="/" componet={App}></Route>
        <Route exact path="/bas" componet={bas}></Route>
      </Router>
     <div>
        
     </div>
      <nav class="navbar">
        <div class="logo"><img src={logo} width="150px"/></div>
        <a href="#" class="toggle-button">
          <i class="fas fa-bars"></i>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="#" title="Link favorite">Home</a></li>
            <li><a href="#" title="Link favorite">News</a></li>
            <li><a href="" target="_blank">Coffeeshops</a></li>
          </ul>
        </div>
      </nav>
      <div class="hero-image">
        <div class="hero-text">
            <img src={hero} width="590px" height="450px" />
          <p>- It’s not just the place - <span>
           <br/> Many coffeeshop that you can see in here.
          </span></p>
        </div>
      </div>
      <br/>
      <br/>
        <p class="news"><Link to="/bas"/>NEWS</p>
        <br/>
        <br/>

        <div class="slider">
        <div class="slide">
        <img src={baswara}/>
        </div>
        <div class="slide">
        <img src={nogpi}/>
        </div>
        <div class="slide">
        <img src={tlmy}/>
        </div>
        <button class="prev-btn">&#10094;</button>
        <button class="next-btn">&#10095;</button>
      </div>

      <img src={coffee} class="coffee"/>
      <div class="container">
        <main class="grid">
            <article>
                <img src={baswarafix}/>
                <div class="content">
                    <hr /> 
                    <h2> Kedai Baswara </h2>
                    <p>punya mas theo</p>
                </div>
            </article>
            <article>
            <img src={tlmyfix}/>
                <div class="content">
                    <hr />
                    <h2> Angkringan Telomoyo </h2>  
                    <p>punya mas nopal & mas ewok</p>
                </div>
            </article>
            <article>
                <img src={nogpifix}/>
                <div class="content">
                    <hr />
                    <h2> Nogpi Huis </h2>
                    <p>punya mas nicho</p>
                </div>
            </article>
            
        </main>
        </div>
        <footer>
        <a> Copyright 2022/2023 &copy; Owen Ingin Semhas</a>
    </footer>
    </body>

    
  );
}

export default App;
