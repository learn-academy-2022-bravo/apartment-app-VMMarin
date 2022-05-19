import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import logo from '../assets/logo.png'


export default class Home extends Component {
  render() {
    console.log(logo)
    return (
      <>
  <h1> WELCOME HOME </h1>
     

      <Helmet>
        <style>{'body { background-color:#c47a9e; }'}</style>
      </Helmet>
      </>
     )
     }
 }
  