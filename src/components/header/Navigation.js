import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem,Bars, NavbarToggler, Collapse } from "reactstrap"
import { Link } from "react-router-dom";

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen 
        })
    }
   render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <NavbarToggler onClick={this.navToggle} />
          <a className="navbar-brand" href="/">Resturent</a>
        
       
          <Collapse isOpen={this.state.isNavOpen} navbar>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </Collapse>
          </div>
        {/* </div> */}
      </nav>
    )
   }
}
export default Navigation