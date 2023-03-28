import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Images/logo.png";
import click from "../Images/click.png";
import { Footer, Logo, Input, Button, Click } from "../Style/Constant/Index.js"
import { toast } from 'react-toastify';

export default function SignInPage() {
   /*  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        try {
            //await signIn(email, password);
            toast('Login realizado com sucesso!');
            navigate('/dashboard');
        } catch (err) {
            toast('Não foi possível fazer o login!');
        }
    }

    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>

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
                <Link to="/up">
                    <h1>Não tem uma conta? Cadastre-se!</h1>
                </Link>
            </Footer>

            <Click> <img src={click} alt="logo" /></Click>
        </>
    ) */
}
