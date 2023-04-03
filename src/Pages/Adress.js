import { useState } from "react";
import { Input, All, Button, Choice, Choices } from "../Style/Constant/User-Style";
import { adress } from "../Services/Adress";
import { useNavigate } from "react-router-dom";

export default function AdressPage() {
    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [reference, setReference] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [profile, setProfile] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function checkCEP(e) {
        const cepUser = e.target.value.replace(/\D+/g, ' '); //DO: regex substituido tudo
        console.log("CEP", cepUser);
        fetch(`https://viacep.com.br/ws/${cepUser}/json/`)
            .then(res => res.json()) //converte para json
            .then(data => {
                if (data.erro === true) {
                    return alert("Insira um CEP válido");
                } else {
                    console.log("data", data);
                    setStreet(data.logradouro);
                    setNeighborhood(data.bairro);
                    setCity(data.localidade);
                    setState(data.uf);
                }
            })
            .catch(error => {
                if (error === true) {
                    alert("Insira um CEP válido");
                }
            })
    }

    function recyclable(r) {
        if (r === 1) {
            setProfile("reciclar");
        } else {
            setProfile("coletar");
        }
    }

    async function submit(event) {
        event.preventDefault();
        const adressUser = {
            name,
            cep,
            street,
            number,
            complement,
            reference,
            city,
            state,
            neighborhood,
            profile
        }
        try {
            setDisabled(true);
            await adress(adressUser);
            navigate('/dashboard');
        } catch (error) {
            setDisabled(false);
            alert('Não foi possível fazer o cadastro do endereço!');
        }
    }

    return (
        <All>
            <h4>Falta pouco para você fazer parte!</h4>
            <form onSubmit={submit}>
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
                        onBlur={checkCEP}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" rua"
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="number"
                        placeholder=" número"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" complemento"
                        onChange={(e) => setComplement(e.target.value)}
                        value={complement}
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
                <Input>
                    <input
                        type="text"
                        placeholder=" bairro"
                        onChange={(e) => setNeighborhood(e.target.value)}
                        value={neighborhood}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" cidade"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" estado"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        required
                        disabled={disabled}
                    />
                </Input>
                <Choices>
                    <Choice onClick={() => recyclable(1)}>
                        <h1>quero reciclar</h1>
                    </Choice>
                    <Choice onClick={() => recyclable(2)}>
                        <h1>quero coletar</h1>
                    </Choice>
                </Choices>
                <Button>
                    <button
                        type="submit"
                        disabled={disabled}
                    >
                        <h1>confirmar dados</h1>
                    </button>
                </Button>
            </form>
        </All>
    )
}