import './style.css'
import { Link } from 'react-router-dom';


const SecaoProdutos = () => {
    return(
        <div className='secao-produtos' id='produtos'>
            <h2>Explore a Visão da Elegância: Nosso Catálogo Exclusivo de Óculos</h2>
            <p>
            Veja o mundo com estilo incomparável. Descubra a excelência em cada detalhe através do nosso catálogo de produtos, onde a moda encontra a funcionalidade em cada par de óculos.  
            </p>

            <div className='container-paralax'>
            <Link className='opcao-ver-catalogo' to={ '/catalogo' }>VER CATÁLOGO</Link> 
            </div>
             
        </div>
    )
}
export default SecaoProdutos;