import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Portsec, Mainh1, Portart, Portartli, Portartlia, Portfigure, Portfigurediv, Portfigureimg, Portfigurea } from './style.js';

const Portfolio = () => {

    const [images, setimages] = useState([]);

    useEffect(() => {

        axios.get('js/data.json').then((res) => {
            setimages(res.data.portfolio)
        })
    }, [])

    const portimges =  images.map((i) => {
        return (
            <Portfigurediv key={i.id}>
                <Portfigureimg src={i.image} />
                <Portfigurea href='#'>Show Images</Portfigurea>
            </Portfigurediv>
        )
    })


    return (

        <Portsec>
            <div className='container'>

                <Mainh1>My Portfolio</Mainh1>

                <div className='portinfo'>

                    <Portart>
                        <ul>
                            <Portartli> <Portartlia actv href='#'>All</Portartlia> </Portartli>
                            <Portartli> <Portartlia href='#'>HTML</Portartlia> </Portartli>
                            <Portartli> <Portartlia href='#'>PHOTOSHOP</Portartlia> </Portartli>
                            <Portartli> <Portartlia href='#'>WORDPRESS</Portartlia> </Portartli>
                            <Portartli> <Portartlia href='#'>MOBILE</Portartlia> </Portartli>
                        </ul>
                    </Portart>

                    <Portfigure>
                        {portimges}
                    </Portfigure>
                </div>
            </div>

        </Portsec>

    )
}

export default Portfolio;