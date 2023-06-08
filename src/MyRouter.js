/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import {Switch, Route} from "react-router-dom"
import Baswara from "./Baswara.js";
import App from "./App";

function MyRouter (){
    return(
        <Switch>
            <Route path="/baswara" Component={Baswara}></Route>
            <Route path="/" Component={App}></Route>
            
        </Switch>
    )
}

export default MyRouter