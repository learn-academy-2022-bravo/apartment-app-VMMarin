import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'reactstrap'
import {Helmet} from 'react-helmet';
import logo from '../assets/logo.png'




class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
      {/* <h1>Apartment App</h1> */}
      <Nav>
        {logged_in &&
          <NavItem>
            <a href={sign_out_route} className="nav-link">Sign Out</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={sign_in_route} className="nav-link">Sign In</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={new_user_route} className="nav-link">Sign Up</a>
          </NavItem>
        }
      </Nav>

    

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img className= "d-sm-block w-50 mx-auto"src={logo}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/apartmentindex">See All Apartments <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/apartmentnew">Upload an Apartment Listing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav> 
   


      <div>
        <Helmet>
          <style>{'body { background-color:#c47a9e; }'}</style>
        </Helmet>

      </div>
    
    </>
    )
  }
}
export default Header