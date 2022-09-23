import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import styles from './_Formulario.scss'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [referencia, setReferencia] = useState('')
    const [produto, setProduto] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoClienteCadastrado({
            nome,
            email,
            referencia,
            produto
        })
        setNome('')
        setEmail('')
        setReferencia('')
        setProduto('')
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para finalizar o seu pedido!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Email"
                    placeholder="Digite seu email"
                    tipo={'email'}
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    label="Referência"
                    placeholder="Digite o endereço da imagem"
                    valor={referencia}
                    aoAlterado={valor => setReferencia(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Produtos" 
                    itens={props.produtos}
                    valor={produto}
                    aoAlterado={valor => setProduto(valor)}
                />
                <Botao>
                    Enviar Pedido
                </Botao>
            </form>
        </section>
    )
}

export default Formulario