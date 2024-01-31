import './style.css'
import { Link } from 'react-router-dom';


const Topo = () => {
    return(
        <header>
            <div className='limitar-topo'>
            
                <img src='/assets/imagens/logo.png'/>
                <div className='container-links'>
                <Link className='opcao-home' to={'/'}>Home</Link>
                <a href='#produtos' className='opcao-produtos'>Produtos</a>
                <a href='#sobre' className='opcao-sobre'>Sobre</a>
                <a href='#contatos' className='opcao-contatos'>Contatos</a>
                
                </div>
            </div>
        </header>
    )
}
export default Topo;