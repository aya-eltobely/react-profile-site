import React , { Component } from 'react';
import {Navsec,Sec ,Navh2,Navli,Nava,Navlink} from './style.js';


/////////////////////////////


const Navbar = () =>
{
    return(

        <Navsec>
            <div className='container'>
                <Sec>
                    <div className='navh'>
                        <Navh2>Ultra Profile</Navh2>
                    </div>

                    <ul>
                        <Navli> <Navlink to='/' >Home</Navlink> </Navli>
                        <Navli> <Nava href='' >Work</Nava> </Navli>
                        <Navli> <Nava href='' >Portfolio</Nava> </Navli>
                        <Navli> <Nava href='' >Resume</Nava> </Navli>
                        <Navli> <Nava href='' >About</Nava> </Navli>
                        <Navli> <Navlink to='/contact' >Contact</Navlink> </Navli>
                    </ul>  
                </Sec>          
            </div>
        </Navsec>

    )
}

export default Navbar;