import styled from "styled-components";
import colors from "../StandardColors.js";

export const All = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    h4{
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 20px;
        color: ${colors.base};
    }
`

export const Input = styled.div`
    input {
        width: 500px;
        min-width: 325px;
        height: 45px;  
        border-radius: 5px;
        border-color: #D4D4D4;
        border-style: solid;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #808080;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 25px;
    }
`

export const Button = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
    button {
        background-color: ${colors.base};
        width: 510px;
        min-width: 330px;
        height: 45px;  
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
    }
`

export const Footer = styled.div`
    vertical-align: top;
    vertical-align: #52B6FF;
    h1{
        color: #337C41;
        font-style: regular;
        font-weight: 400;
        font-size: 19px;
        line-height: 17px;  
    }
`