import React , { Component } from 'react';
import {Homesec,Homearticle,Homeh1,Homeh3,Homep,Homea} from './style.js';

const Home = () =>
{
    return(

        <Homesec>
            <Homearticle>
                <Homeh1>Aya Eltobely</Homeh1>
                <Homeh3>Front End Developer</Homeh3>
                <Homep>Iam a professional Front-End Developer creating modern and resposive designs to Web . Let us work together. Thank you.</Homep>
                <Homea href='#'>Let’s Begin</Homea>
            </Homearticle>
        </Homesec>

    )
}

export default Home;