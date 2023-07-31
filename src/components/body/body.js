import React from "react";
import Menu from "./menu"
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import {Route, Redirect, Switch, Routes} from "react-router-dom";

const Body = () => {
    return(
        <div>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/menu" exact Component={Menu} />
                <Route path="/contact" exact Component={Contact} />
                <Route path="/About" exact Component={About} />
            </Routes>
        </div>
    )
}
export default Body;