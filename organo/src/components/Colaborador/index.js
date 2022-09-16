import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem, corPrimaria }) => {
    const background = { backgroundColor: corPrimaria }

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={background}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador