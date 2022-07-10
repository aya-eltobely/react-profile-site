import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Socialart, Socialfigure, Socialicon, Socialinfoh2 } from './style.js';

const Socialmedia = () => {

    const [social, setsocial] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => setsocial(res.data.social))
    }, []);

    const sociali = social.map((i) => {
        return (

            <Socialfigure key={i.id}>
                <div>
                    <Socialicon className={i.icon}></Socialicon>
                </div>
                <div>
                    <Socialinfoh2>{i.title}</Socialinfoh2>
                    <h1>{i.body}</h1>
                </div>
            </Socialfigure>

        )
    })

    return (

        <section className='socialsec'>

            <Socialart>

                {sociali}
            </Socialart>



        </section>

    )
}

export default Socialmedia;