import './_botao.scss'

const Botao = (props) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

export default Botao