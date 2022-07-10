import styled from "styled-components";

export const Proful =  styled.ul
`
    margin: 0;
    padding: 0;
`
export const Profsec =  styled.section
`
    margin: 50px 0;
`
export const Profcontainer2 =  styled.div
`
    display: flex;
    justify-content: space-between;    
`
export const Profarticle =  styled.article
`
    width: 49%;
    margin: 0;
`
export const Proffigure =  styled.figure
`
    width: 49%;
    margin: 0;
`
export const Profh2 =  styled.h2 
`
    font-size: 30px;
`
export const Profartspan =  styled.span
`
    margin-left: 30px;
    font-weight: initial;
`
export const Profartli =  styled.li
`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`
export const Proffigp =  styled.p
`
    color: rgb(174, 171, 171);
`
export const Profskillp =  styled.p
`
    display: flex;
    justify-content: space-between;
`
export const Profprogress =  styled.div
`
    background-color: #DDD;
    height: 4px;
    width: 100%;

    
`
export const Profprogresslayer =  styled.div
`
    background-color: #EB5424;
    height: 4px;
    width: 100%;

    ${props => props.num === props.num ? `width: ${props.perc};` : ''}

`

