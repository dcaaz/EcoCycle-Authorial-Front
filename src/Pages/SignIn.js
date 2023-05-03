import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { Footer, Input, Button, All, Img } from "../Style/Constant/User-Style.js"
import { signIn } from "../Services/UserApi";
import { AuthContext } from "../Context/Auth";
import { ceps } from "../Services/AdressApi";
import Swal from "sweetalert2";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const {
        setToken,
        setPoints,
        setPoint
    } = useContext(AuthContext);

    async function submit(event) {
        event.preventDefault();
        try {
            setDisabled(true);
            const res = await signIn(email, password);
            await setToken(res.token);

            if (res.adress === true) {
                navigate('/adress');
            } else {
                const data = await ceps(res.token);
                setPoints(data.Users);
                setPoint(data.User);
                navigate('/maps');
            }
        } catch (err) {
            setDisabled(false);
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: (`${err.response.data}`),
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <>
            <All>
                <Img>
                    <img src={logo} alt="logo" />
                </Img>

                <form onSubmit={submit}>
                    <Input>
                        <input
                            type="email"
                            placeholder=" email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            disabled={disabled}
                        />
                    </Input>
                    <Input>
                        <input
                            type="password"
                            placeholder=" senha"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            disabled={disabled}
                        />
                    </Input>
                    <Button>
                        <button
                            type="submit"
                            disabled={disabled}
                        >
                            <h1>entrar</h1>
                        </button>
                    </Button>
                </form>

                <Footer>
                    <Link to="/signup">
                        <h1>Não tem uma conta? Cadastre-se, teste 1!</h1>
                    </Link>
                </Footer>
            </All>
        </>
    )
}
