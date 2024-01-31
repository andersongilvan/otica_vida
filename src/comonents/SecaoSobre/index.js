import './style.css'
import CardSobre from '../CardSobre';


const SecaoSobre = () => {
    return(
        <div className='secao-sobre' id='sobre'>
            <div className='limitar-secao-sobre'>
            <div className='titulo-secao-sobre'>
            <h2>QUEM SOMOS NÓS?</h2>
                <p>
                Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
                </div>
                <div className='container-sobre'>
                    <CardSobre>
                        <img src='/assets/imagens/quem-somos.webp'/>
                    </CardSobre>
                    <CardSobre>
                        <h3>Nossas Filiais</h3>
                        <p>
                        Atualmente, nossa ótica possui uma sólida presença com mais de 20 filiais espalhadas pelo Brasil e na América, consolidando nossa dedicação em oferecer serviços e produtos de qualidade óptica em diversas localidades.
                        </p>
                    </CardSobre>
                    <CardSobre>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe é altamente capacitada e constantemente treinada para proporcionar um atendimento excepcional. Estamos empenhados em assegurar que cada cliente receba assistência especializada, refletindo nosso compromisso com a excelência no serviço.</p>
                    </CardSobre>
                    <CardSobre>
                        <img src='/assets/imagens/quem-somos2.jpeg'/>
                    </CardSobre>
                </div>
            </div>
        </div>
    )
}
export default SecaoSobre;