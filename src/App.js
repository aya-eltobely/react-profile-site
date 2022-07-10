import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Index from './components/index';
import Navbar from './components/navbar';
import Contact from './components/contact';



class App extends Component
{
  render()
  {


    return(
      <div className="App">

        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

        </BrowserRouter>


  

      </div>
    )
  }
}



export default App;
