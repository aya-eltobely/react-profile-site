import styled from 'styled-components';


export const Socialart =  styled.article
`
    display: flex;
`
export const Socialfigure =  styled.figure
`
    width: 33% ;
    padding: 70px;
    background-color: blueviolet;
    color: #FFF;
    margin: 0;
    display: flex;
    align-items: center;

    &:first-of-type
    {
    background-color: #3B5998;
    }

    &:nth-of-type(2)
    {
    background-color: #498CBF;
    }

    &:nth-of-type(3)
    {
    background-color: #CC2127;
    }

`

export const Socialicon =  styled.i
`
    background-color: #FFF;
    color: #888888;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-right: 20px;
`
export const Socialinfoh2 =  styled.h2
`
    line-height: .2;
`