import './style.css'
import CardContato from '../CardContato';

const SecaoContato = () => {
    return(
        <div className='secao-contato' id='contatos'>
            <div className='limitar-secao-contato'>
                <h2>Fale conosco</h2>
                <p>
                Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div className='container-contato'>
                    <CardContato>
                    <p>Contatos</p>
                        <div className='box-contato'>
                            <img src='/assets/imagens/email.png'/>
                            <span>contato@oticavida.com</span>
                        </div>
                        <div className='box-contato'>
                            <img src='/assets/imagens/local.png'/>
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div className='box-contato'>
                            <img src='/assets/imagens/telefone.png'/>
                            <span>(21) 9999-9999</span>
                        </div>
                    </CardContato>
                    
                    <CardContato>
                        <p>Nossas Redes Sociais</p>
                        <div className='box-contato'>
                            <img src='/assets/imagens/ig.png'/>
                            <span>@oticavidarj</span>
                        </div>
                        <div className='box-contato'>
                            <img src='/assets/imagens/fb.png'/>
                            <span>/OticaVida</span>
                        </div>
                        <div className='box-contato'>
                            <img src='/assets/imagens/tt.png'/>
                            <span>@oticavidarj</span>
                        </div>
                    </CardContato>
                </div>
            </div>
            
        </div>
    )
}
export default SecaoContato;