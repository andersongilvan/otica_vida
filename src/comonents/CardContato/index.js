import './style.css'



const CardContato = (props) => {
    return(
        <div className='card-contato'>
            { props.children }
        </div>
    )
}
export default CardContato;