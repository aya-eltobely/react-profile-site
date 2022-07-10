import React, { Component } from 'react';
import axios from 'axios';
import { Worksec, Workh1, Workfigures, Workfigure, Workfigurei, Workfigureh3, Workfigurehr, Workfigurep } from './style.js'


class Work extends Component {

    state =
    {
        works: []
    }

    componentDidMount = () => {
        axios.get('js/data.json').then((res) => {
            this.setState({
                works: res.data.works
            })
        })
    }

    render() {

        const { works } = this.state;

        const workss = works.map((i) => {
            return (

                <Workfigure key={i.id}>
                    <Workfigurei className={i.icon_name} />
                    <Workfigureh3>{i.title}</Workfigureh3>
                    <Workfigurehr></Workfigurehr>
                    <Workfigurep>{i.body}</Workfigurep>
                </Workfigure>

            )
        })

        return (

            <Worksec>

                <div className='container'>
                    <div>
                        <Workh1>My Work</Workh1>
                    </div>

                    <Workfigures>
                       {workss}
                    </Workfigures>
                </div>


            </Worksec>



        )
    }
}

export default Work;