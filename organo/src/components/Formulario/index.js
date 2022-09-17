import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [imagem, setImagem] = useState('')
    const [produto, setProduto] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoClienteCadastrado({
            nome,
            email,
            imagem,
            produto
        })
        setNome('')
        setEmail('')
        setImagem('')
        setProduto('')
    }

    return (
        <section className="formulario">
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
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    label="Foto Cliente"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
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