import styled from "styled-components";
import colors from "../StandardColors.js";

export const Img = styled.div`
    img{
        width: 350px;
        @media (max-width: 900px) {
            width: 250px;
        }
    }
`

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
        width: 600px;
        height: 50px;  
        border-radius: 5px;
        border-color: #D4D4D4;
        border-style: solid;
        margin-bottom: 6px;
        @media (max-width: 900px){
        width: 400px;
        }
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
        width: 610px;
        height: 60px;  
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
        @media (max-width: 900px){
        width: 410px;
        }
    }
`

export const Choices = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`

export const Choice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  h1{
    color: #808080;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 25px;
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