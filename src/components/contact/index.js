import React, { Component, Fragment } from 'react';
import { Contactsec, Contacth1, Contactformfdiv, Contactformdiv, Contactinputsub, Contacttextarea, Contactformfdivinput } from './style.js';
import Footer from '../footer/index.js';

const Contact = () => {
    return (

        <Fragment>

            <Contactsec>

                <div className='container'>

                    <Contacth1>Drop Me A Line</Contacth1>

                    <form>
                        <Contactformfdiv>
                            <Contactformfdivinput type='text' placeholder='Your Name' />
                            <Contactformfdivinput type='text' placeholder='Your Email' />
                        </Contactformfdiv>
                        <Contactformdiv>
                            <Contactinputsub type='text' placeholder='Subject' />
                        </Contactformdiv>
                        <Contactformdiv>
                            <Contacttextarea placeholder='Message'></Contacttextarea>
                        </Contactformdiv>
                        <input type='submit' value='Send' />
                    </form>
                </div>

            </Contactsec>

            <Footer />
        </Fragment>

    )
}

export default Contact;