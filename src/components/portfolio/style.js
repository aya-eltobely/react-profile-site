import styled from "styled-components";

export const Portsec = styled.section
`
    background-color: #F8F8F8;
    text-align: center;
    padding: 20px 0;
`
export const Mainh1 = styled.h1
`
    font-size: 30px;
    letter-spacing: 2px;
`
export const Portart = styled.article
`
    margin-bottom: 50px;
`
export const Portartli = styled.li
`
    display: inline-block;
    margin-right: 50px;
`
export const Portartlia = styled.a
`
    color: #000;
    font-size: 18px;

    background-color: ${props => props.actv ? "#EB5424" : ""};
    color : ${props => props.actv ? "#fff" : ""};
    padding : ${props => props.actv ? "6px 50px" : ""};

`

export const Portfigure = styled.figure
`
    display: flex;
    justfit-content:space-between;
    flex-wrap:wrap

`
export const Portfigurediv = styled.div
`
    position: relative;
    width:24%;

    &:hover >a
    {
        display: block;
    }

    &:hover >img
    {
        opacity: .7;
    }
`
export const Portfigureimg = styled.img
`
    width: 100%;
`
export const Portfigurea = styled.a
`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    border: 2px soli #EB5424;
    background-color: #FFF;
    padding: 7px 15px;
    display: none;
`
