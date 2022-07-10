import React , { Component } from 'react';
import {Aboutsec,Aboutart,Aboutarth1} from './style.js';

const About = () =>
{
    return(

        <Aboutsec>

            <div className='container'>

                <Aboutart>

                    <Aboutarth1>This is me</Aboutarth1>
                    <Aboutarth1>Creative Director</Aboutarth1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?</p>

                </Aboutart>



            </div>

        </Aboutsec>

    )
}

export default About;