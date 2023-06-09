import { useState, useContext } from "react";
import { Input, All, Button, Choice, Choices } from "../Style/Constant/User-Style";
import { adress, ceps } from "../Services/AdressApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";
import Swal from "sweetalert2";
import { Switch } from "@mui/material";
import axios from "axios";

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
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    const { token, setPoints, setPoint } = useContext(AuthContext);

    function checkCEP(e) {
        const cepUser = e.target.value.replace(/\D+/g, "");
        fetch(`https://viacep.com.br/ws/${cepUser}/json/`)
            .then(res => res.json())
            .then(data => {
                if (data.erro === true) {
                    Swal.fire({ //DO swal não funciona aqui
                        position: 'top-end',
                        icon: 'warning',
                        title: "Insira uma CEP válido!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    setStreet(data.logradouro);
                    setNeighborhood(data.bairro);
                    setCity(data.localidade);
                    setState(data.uf);
                }
            })
            .catch(error => {
                if (error === true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: "Insira uma CEP válido!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    function CheckPhone(e) {
        const phoneUser = e.target.value.replace(/\D+/g, "");
        const instance = process.env.REACT_APP_INSTANCE_API_ULTRAMSG;
        let params = {
            "token": process.env.REACT_APP_TOKEN_API_ULTRAMSG,
            "chatId": `${phoneUser}`,
            "nocache": ""
        };

        var config = {
            method: 'get',
            url: `https://api.ultramsg.com/${instance}/contacts/check`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: params
        };

        const promise = axios(config);
        promise.then((res) => {
            if (res.data.status === 'valid') {
                setPhone(phoneUser);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: "Insira um número com WhatApp válido, não esqueça do DDD do seu estado!",
                    showConfirmButton: false,
                    timer: 5000
                })
            }
        })

        promise.catch((err) => {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: "Estranho! Algum erro aconteceu com seu telefone. Certifique-se que você inseriu os dados corretamente",
                showConfirmButton: false,
                timer: 5000
            })
        })
    }

    async function submit(event) {
        event.preventDefault();
        const body = {
            name: name[0].toUpperCase() + name.substring(1),
            cep: parseInt(cep),
            street,
            number: parseInt(number),
            complement: complement[0].toUpperCase() + complement.substring(1),
            reference: reference[0].toUpperCase() + reference.substring(1),
            city,
            state,
            neighborhood,
            phone,
            profile
        }

        try {
            setDisabled(true);
            await adress(body, token);
            const data = await ceps(token);
            setPoints(data.Users);
            setPoint(data.User);
            navigate('/maps');
        } catch (err) {
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
                        autoComplete="nope"
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" cep"
                        onChange={(e) => setCep(e.target.value)}
                        value={cep}
                        required
                        disabled={disabled}
                        onBlur={checkCEP}
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
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
                        autoComplete="nope"
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        placeholder=" contato whatsapp"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                        disabled={disabled}
                        onBlur={CheckPhone}
                        autoComplete="nope"
                    />
                </Input>
                <Choices>
                    <Choice>
                        <h1>desejo reciclar</h1>
                        <Switch
                            checked={!profile}
                            onChange={e => setProfile(!e.target.checked)}
                            color="warning"
                        />
                    </Choice>
                    <Choice>
                        <h1>desejo coletar</h1>
                        <Switch
                            checked={profile}
                            onChange={e => setProfile(e.target.checked)}
                            color="warning"
                        />
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