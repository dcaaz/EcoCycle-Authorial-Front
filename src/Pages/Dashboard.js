import trash from "../Images/trash.png";
import people from "../Images/people.png";
import { Link } from "react-router-dom";
import { Div, Text, ButtonDash, Img } from "../Style/Constant/Dashboard-style";

export default function DashboardPage() {
    return (
        <>
            <Div color="#FDBC3B">
                <Text>
                    <h1>Quem somos</h1>
                    <h2>
                        Somos a EcoCycle! Uma empresa focada no meio ambiente e sustentabilidade. Surgimos a partir
                        do desejo de solucionar o problema de várias pessoas: direcionar o lixo com maior autonomia
                        e de acordo com o material. Na maioria das cidades, a coleta de recicláveis passa uma vez por
                        semana e infelizmente esse compromisso às vezes é falho. Diante disso, criamos uma nova possibilidade
                        para quem quer reciclar, otimizando o trabalho dos catadores e ONGs, através da conscientização sobre
                        a importância do ato e ‘conexão’ entre os dois lados: quem quer reciclar versos quem depende da reciclagem
                        para viver (e quem sabe, incentivar um futuro melhor?).
                    </h2>
                </Text>
                <Img>
                    <img src={trash} alt="Trash" />
                </Img>
            </Div>
            <Div color="#000000">
                <Text font="#FFFFFF">
                    <h1>Feitos de pessoas como você</h1>
                    <h3>
                        Transforme lixo em vida: Recicle usando o nosso aplicativo!
                    </h3>
                </Text>
            </Div>
            <Div>
                <Text>
                    <h1>O que nos move</h1>
                    <h2>
                        A vontade de fazer mais pelo mundo e possibilitar que a reciclagem seja acessível e realizada
                        por mais pessoas. Diante disso, queremos enfatizar que a ideia central não é criticar o sistema público e/ou
                        substituir a atividade do mesmo, até porque a demanda do setor é gigantesca. Entretanto, independente do cenário,
                        nunca estamos isentos de fazer o nosso melhor.
                    </h2>
                </Text>
                <Img>
                    <img src={people} alt="Trash" />
                </Img>
            </Div>
            <ButtonDash>
                <Link to="/signin">
                    <button>Comece agora</button>
                </Link>
            </ButtonDash>
        </>
    )
}
  