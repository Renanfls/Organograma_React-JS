import styles from './_Cliente.scss'

const Cliente = ({ nome, email, referencia, corDeFundo }) => {
    const background = { backgroundColor: corDeFundo }

    return (
        <div className={styles.cliente}>
            <div className={styles.cabecalho} style={background}>
                <img src={referencia} alt={nome}/>
            </div>
            <div className={styles.rodape}>
                <h4>{nome}</h4>
                <h5>{email}</h5>
            </div>
        </div>
    )
}

export default Cliente