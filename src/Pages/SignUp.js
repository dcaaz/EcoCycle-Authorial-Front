import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { Footer, Logo, Input, Button, Click } from "../Style/Constant/Index.js";
import { signUp } from "../Services/UserApi";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas devem ser iguais!');
        } else {
           try {
                setDisabled(true);
                await signUp(email, password);
                navigate('/');
            } catch (error) {
                setDisabled(false);
                console.log("error signUp", error);
                alert('Não foi possível fazer o cadastro!');
            }
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
                <Input>
                    <input
                        type="password"
                        placeholder=" confirme a senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
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
