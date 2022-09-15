import './Time.css'

const Time = (props) => {
    const background = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        <section className='time' style={background}>
            <h3 style={borderBottom} >{props.nome}</h3>
        </section>
    )
}

export default Time