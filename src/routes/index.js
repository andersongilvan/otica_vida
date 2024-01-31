import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import SecaoProdutos from "../comonents/SecaoProdutos";
import CatalogoDeProdutos from "../views/CatalogoDeProdutos";
import SecaoContato from "../comonents/SecaoContato";
import SecaoSobre from "../comonents/SecaoSobre";


const Rotas = () => {
    return(
        <diuv>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <Home/> }/>
                    <Route path="/catalogo" element={ <CatalogoDeProdutos/> } />
                    <Route path="/produtos" element={ <SecaoProdutos/> } /> 
                    <Route path="/contatos" element={ <SecaoContato/> } />
                    <Route path="/sobre" element={ <SecaoSobre/> } />
                </Routes>
            </BrowserRouter>
        </diuv>
    )
}
export default Rotas;