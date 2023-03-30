import styled from "styled-components";
import colors from "../StandardColors.js";

export const Div = styled.div`
    background-color: ${props => props.color}; //passar para base
    padding: 16px;
    height: 300px;
    display: flex;
`

export const Text = styled.div`
    width: 60%;
    margin-left: 200px;
    color: ${props => props.font};
    font-family: 'IBM Plex Sans', sans-serif;
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
        font-size: 50px;
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
        min-width: 330px;
        height: 100px;  
        border-radius: 4.64px;
        border-style: none;
        //fonte
        color: #FFFFFF;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 40px;
    }
`