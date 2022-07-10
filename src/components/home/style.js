import style from "styled-components";

export const Homesec = style.section`
    background-image: url('images/Home/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: 100%;
    background-position: center center;
`

export const Homearticle = style.article`
    text-align: center;
    padding: 100px;
`

export const Homeh1 = style.h1`
    color: #5E5E5E;
    font-size: 50px;
    margin-bottom: 10px;
`
export const Homeh3 = style.h3`

    color: #EB5424;
    font-size: 25px;
`
export const Homep = style.p`

    width: 50%;
    margin-right: auto;
    margin-left: auto;
    color: #88898B;
    font-size: 22px;
    margin-bottom: 30px;
`
export const Homea = style.a`

    color: #FFF;
    background-color: #EB5424;
    padding: 10px 20px;
    font-size: 20px;
    display: inline-block;

    &:hover{
        background-color: #FFF;
        color: #EB5424;
    }
`
