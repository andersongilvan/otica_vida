import './style.css'
import Topo from '../../comonents/Topo';
import SecaoBaner from '../../comonents/SecaoBaner';
import SecaoProdutos from '../../comonents/SecaoProdutos';
import SecaoSobre from '../../comonents/SecaoSobre';
import SecaoContato from '../../comonents/SecaoContato';
import Rodape from '../../comonents/Rodape';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Home = () => {

    useEffect(() => {
    
        ScrollReveal().reveal('div', {
          delay: 80,
          distance: '40px',
          origin: 'bottom',
          opacity: 0,
          easing: 'linear',
          reset: true,
        });
      }, []);
    





    return(
        <div className='home' id='home'>
        <Topo/>
        <SecaoBaner/>
        <SecaoSobre/>
        <SecaoProdutos/>
        <SecaoContato/>
        <Rodape/>
        </div>
    )
}
export default Home;