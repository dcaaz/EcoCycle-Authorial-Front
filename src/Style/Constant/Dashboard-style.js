import styled from "styled-components";
import colors from "../StandardColors.js";

export const Div = styled.div`
    background-color: ${props => props.color}; //passar para base
    padding: 16px;
    display: flex;

    @media (max-width: 900px){
        padding: 10px;
        height: 100%;
    }
`

export const Text = styled.div`
    width: 60%;
    margin-left: 200px;
    color: ${props => props.font};
    font-family: 'IBM Plex Sans', sans-serif;
    text-align: justify;
    h1{
        font-weight: 600;
        font-size: 50px;
        margin-bottom: 20px;
    }
    h2{
        font-weight: 200;
        font-size: 25px;
        max-width: 80%;
    }
    h3{
        font-weight: 300;
        font-size: 40px;
        margin-bottom: 60px;
    }

    @media (max-width: 900px){
    width: 100%;
    margin-left: 50px;
    margin-bottom: 10px;
    h1{
        font-size: 30px;
    }
    h2{
        font-size: 20px;
    }
    h3{
        font-weight: 100;
        font-size: 25px;
        margin-right: 50px;
    }
    }
`

export const Img = styled.div`
    img{
        width: 300px;
        @media (max-width: 900px){
        display: none;
        }
    }
`


export const ButtonDash = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 100px;
    button {
        background-color:  ${colors.base};
        width: 600px;
        height: 100px;  
        border-radius: 4.64px;
        border-style: none;
        //fonte
        color: #FFFFFF;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 40px;
    }
    @media (max-width: 900px){
        margin-top: 40px;
        button {
        width: 250px;
        height: 80px;  
        color: #FFFFFF;
        font-size: 30px;
        }
    }
`