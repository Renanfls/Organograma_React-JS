import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Pedidos from './components/Pedidos';

function App() {

  const produtos = [
    {
      nome: 'Criação de Logo',
      corPrimaria: '#000',
      corSecundaria: '#ffe282'
    },
    {
      nome: 'Recriação de Logo',
      corPrimaria: '#ffe282',
      corSecundaria: '#FFF'
    },
    {
      nome: 'Cartão de Visita',
      corPrimaria: '#000',
      corSecundaria: '#ffe282'
    },
    {
      nome: 'Identidade Visual',
      corPrimaria: '#ffe282',
      corSecundaria: '#FFF'
    },
    {
      nome: 'Website',
      corPrimaria: '#000',
      corSecundaria: '#ffe282'
    }
  ]

  const [clientes, setClientes] = useState([])

  const aoNovoClienteAdicionado = (cliente) => {
    setClientes([...clientes, cliente])
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario produtos={produtos.map(produto => produto.nome)} aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)} />

      {produtos.map(produto => <Pedidos
        key={produto.nome} 
        nome={produto.nome} 
        corPrimaria={produto.corPrimaria} 
        corSecundaria={produto.corSecundaria} 
        clientes={clientes.filter(cliente => cliente.produto === produto.nome)}
      />)}

      <Footer />

    </div>
  );
}

export default App;
