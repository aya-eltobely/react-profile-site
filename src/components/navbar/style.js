
import styled from 'styled-components';
import {Link } from 'react-router-dom';


export const Navsec = styled.nav`
    padding: 5px 30px;
`
export const Sec = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center
`
export const Navh2 = styled.h2`
    font-size:30px
`

export const Navli = styled.li`
    display:inline-block;
    margin-right:20px
`

export const Nava = styled.a`
    color:#222;
    font-weight:600;
    font-size:18px;

    &:hover{
        color:#EB5424
    }
`

export const Navlink = styled(Link)`
    color:#222;
    font-weight:600;
    font-size:18px;

    &:hover{
        color:#EB5424
    }
`



