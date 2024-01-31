import './style.css'


const CardConteudo = (props) => {
    return(
        <div className='card-conteudo'>
            { props.children }
        </div>
    )
}
export default CardConteudo;