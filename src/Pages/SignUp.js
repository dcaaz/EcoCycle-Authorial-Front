import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Image/logo.png";
import { Footer, Logo, Input, Button, Click } from "../Style/Constant/Index.js"

export default function SignUpPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [cep, setCep] = useState();
    const [address, setAddress] = useState();
    const [reference, setReference] = useState();
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login() {
        setDisabled(true);
        navigate("/");
    }

    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>

            <form onSubmit={login}>
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
                <Input>
                    <input
                        type="text"
                        placeholder=" nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="number"
                        placeholder=" cep"
                        onChange={(e) => setCep(e.target.value)}
                        value={cep}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" endereço"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" ponto de referência"
                        onChange={(e) => setReference(e.target.value)}
                        value={reference}
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
                <Link to="/">
                    <h1>Já tem uma conta? Entre!</h1>
                </Link>
            </Footer>
        </>
    )
}
