import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import { Profartli, Profartspan, Profcontainer2, Proffigp, Proffigure, Profh2, Profprogress, Profprogresslayer, Profsec, Profskillp, Proful, Profarticle } from './style.js'

const Profile = () => {

    const [skill, setskill] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => setskill(res.data.profile))
    }, []);

    const skills = skill.map((i) => {
        return (
            <div key={i.id}>
                <Profskillp> <span>{i.skill} </span> <span>{i.percent}</span> </Profskillp>
                <Profprogress >
                    <Profprogresslayer num={i.id} perc={i.percent}></Profprogresslayer>
                </Profprogress>
            </div>

        )
    })

    return (

        <Profsec>
            <div className="container">

                <Profcontainer2>
                    <Profarticle>
                        <Profh2>My Profile</Profh2>

                        <Proful>
                            <Profartli> Name <Profartspan>aya ektobely</Profartspan> </Profartli>
                            <Profartli> Birthday <Profartspan>21/1/1996</Profartspan> </Profartli>
                            <Profartli> Address <Profartspan>Ain shams</Profartspan> </Profartli>
                            <Profartli> Phone <Profartspan>4444 5555 6666</Profartspan> </Profartli>
                            <Profartli> Email <Profartspan>aya@aya.com</Profartspan> </Profartli>
                            <Profartli> Website <Profartspan>www.google.com</Profartspan> </Profartli>
                        </Proful>
                    </Profarticle>

                    <Proffigure>
                        <Profh2>Some Skills</Profh2>
                        <Proffigp>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</Proffigp>

                        <div className='profskills'>
                            {skills}
                            
                        </div>
                    </Proffigure>

                </Profcontainer2>



            </div>
        </Profsec>


    )
}

export default Profile;