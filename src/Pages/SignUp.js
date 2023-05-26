import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { Footer, Input, Button, All, Img } from "../Style/Constant/User-Style.js";
import { signUp } from "../Services/UserApi";
import Swal from "sweetalert2";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.log(password, confirmPassword)
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: "As senhas não conferem!",
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            try {
                setDisabled(true);
                await signUp(email, password);
                navigate('/signin');
            } catch (err) {
                console.log("err", err);
                setDisabled(false);
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: "Tente novamente!",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    }

    return (
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
                        <h1>cadastrar</h1>
                    </button>
                </Button>
            </form>

            <Footer>
                <Link to="/signin">
                    <h1>Já tem uma conta? Entre!</h1>
                </Link>
            </Footer>
        </All>
    )
}
