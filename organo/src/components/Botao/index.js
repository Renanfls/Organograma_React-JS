import style from './_Botao.scss'

const Botao = (props) => {
    return (
        <button className={style.botao}>{props.children}</button>
    )
}

export default Botao