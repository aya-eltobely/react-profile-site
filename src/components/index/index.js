import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './../home';
import About from './../about';
import Footer from './../footer';
import Portfolio from './../portfolio';
import Profile from './../profile';
import Socialmedia from './../socialmedia';
import Work from './../work';


class Index extends Component
{
  render()
  {


    return(
      <div className="App">

        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />

      </div>
    )
  }
}



export default Index;
