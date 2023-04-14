import styled from "styled-components"
import about from "../Images/about.png"
import out from "../Images/out.png"
import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { useNavigate } from "react-router-dom";

export default function Header() { //DO deixar transparente e sobrepondo o mapa

    const navigate = useNavigate()
    const { setToken } = useContext(AuthContext);

    function aboutfunc() {
        window.location.href = 'https://www.linkedin.com/in/danitech/';
    }

    function outfunc() {
        console.log("cheguei 1")
        setToken();
        navigate('/');
    }
    return (
        <>
            <Headers>
                <img src={about} alt="About" onClick={aboutfunc} />
                <img src={out} alt="Out" onClick={outfunc} />
            </Headers>
        </>
    )
}

const Headers = styled.div`
   background-color: #FDBC3B;
   width: 100vw;
   height: 50px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 0px;

   opacity: 0.5;
   img{
    width: 60px;
    height: 45px;
   }
`