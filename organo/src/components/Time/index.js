import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const background = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0 && <section className='time' style={background}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Time