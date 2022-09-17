import Cliente from '../Cliente'
import './Time.css'

const Pedidos = (props) => {
    const background = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0 && <section className='time' style={background}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( cliente => <Cliente key={cliente.nome} nome={cliente.nome} cargo={cliente.cargo} imagem={cliente.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Pedidos