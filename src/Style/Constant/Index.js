import styled from "styled-components";
import colors from "../StandardColors.js";

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    img{
        width: 30%;
        min-width: 200px;
        max-width: 320px;
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 30%;
        min-width: 325px;
        height: 45px;  
        border-radius: 5px;
        border-color: #D4D4D4;
        border-style: solid;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 25px;
    }
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
    button {
        background-color: ${colors.base};
        width: 25%;
        min-width: 330px;
        height: 45px;  
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const Click = styled.div`
  margin-top: 70px;
  img{
        width: 250px;
    }
`