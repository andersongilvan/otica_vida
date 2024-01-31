import './style.css'
import CardConteudo from '../../comonents/CardConteudo';
import Topo from '../../comonents/Topo'
import Rodape from '../../comonents/Rodape';


const CatalogoDeProdutos = () => {
    return(
        <div className='catalogo-produtos'>
        <Topo/>
            <div className='limitar-secao-catalogo'>

            <CardConteudo>
                <img src='/img-catalogo/1.jpg'/>
                <p>Modelo: Solar Glare</p>
                <span> R$ 289,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/assets/imagens/oculos02.png'/>
                <p>Modelo: Sunset Mirage</p>
                <span>R$ 239,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/img-catalogo/3.webp'/>
                <p>Modelo: Radiant Ray</p>
                <span>R$ 199,99v</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/img-catalogo/4.webp'/>
                <p>Modelo: Luminous Shade</p>
                <span>R$ 219,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/img-catalogo/7.webp'/>
                <p>Modelo: Coastal Horizon</p>
                <span>R$ 269,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/img-catalogo/8.jpg'/>
                <p>Modelo: Mirage Spark</p>
                <span>R$ 189,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/img-catalogo/11.jpg'/>
                <p>Modelo: Clear Visionary</p>
                <span>R$ 189,99</span>
            </CardConteudo>

            <CardConteudo>
                <img src='/assets/imagens/oculos01.png'/>
                <p>Modelo: Urban Chic Insight</p>
                <span>R$ 199,99</span>
            </CardConteudo>
            <CardConteudo>
                <img src='/assets/imagens/oculos03.png'/>
                <p>Modelo: Timeless Frames</p>
                <span>R$ 209,99</span>
            </CardConteudo>
            <CardConteudo>
                <img src='/img-catalogo/12.jpg'/>
                <p>Modelo: Elegant Focus</p>
                <span>R$ 169,99</span>
            </CardConteudo>
            <CardConteudo>
                <img src='/assets/imagens/oculos04.png'/>
                <p>Modelo: Smart Sight</p>
                <span>R$ 179,99</span>
            </CardConteudo>
            <CardConteudo>
                <img src='/img-catalogo/9.webp'/>
                <p>Modelo: Radiant Ray</p>
                <span>R$ 199,99</span>
            </CardConteudo>
            
            </div>
            <Rodape/>
        </div>
    )
}
export default CatalogoDeProdutos;