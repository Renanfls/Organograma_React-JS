import Cliente from '../Cliente'
import styles from './_Pedidos.scss'

const Pedidos = (props) => {
    const background = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        props.clientes.length > 0 && <section className={styles.pedidos} style={background}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <div className={styles.clientes}>
                {props.clientes.map( cliente => <Cliente key={cliente.nome} nome={cliente.nome} email={cliente.email} referencia={cliente.referencia} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )
}

export default Pedidos