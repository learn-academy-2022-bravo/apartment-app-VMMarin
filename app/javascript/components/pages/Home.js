import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import logo from '../assets/logo.png'
// import apartments from '../assets/apartments.jpg'

export default class Home extends Component {
  render() {
    console.log(logo)
    return (

      <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Welcome to ApartMEANT</h1>
      <p class="lead">  Let's you find the apartment meant for you!</p>
      <hr class="my-4"/>
      <p> </p>
      {/* <a class="btn btn-primary btn-lg" href="#foodindex" role="button">Nosh Now</a> */}
      {/* { this.state.submitted && <Redirect to="/foodindex" />} */}
    </div>
      )
      }
  }









      // <>
     
/* 
      <Helmet>
        <style>{'body { background-color:#c47a9e; }'}</style>
      </Helmet>
      </>
     )
     }
 } */

      //     <div class="bg-light p-5 rounded-lg m-3">
      //     <h1 class="display-4">Welcome to Nosh!</h1>
      //     <p class="lead">  The app that let's you swipe to find your next bite.</p>
      //     <hr class="my-4"/>
      //     <p> </p>
      //     {/* <a class="btn btn-primary btn-lg" href="#foodindex" role="button">Nosh Now</a> */}
      //     {/* { this.state.submitted && <Redirect to="/foodindex" />} */}
      //   </div>
      //     )
      //     }
      // }
// export default Home;