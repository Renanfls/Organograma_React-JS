import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Pedidos from './components/Pedidos';

function App() {

  const produtos = [
    {
      nome: 'Criação de Logo',
      corPrimaria: '#FFBA05',
      corSecundaria: '#F2F2F2'
    },
    {
      nome: 'Recriação de Logo',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFF'
    },
    {
      nome: 'Cartão de Visita',
      corPrimaria: '#57C278',
      corSecundaria: '#F2F2F2'
    },
    {
      nome: 'Identidade Visual',
      corPrimaria: '#A6D157',
      corSecundaria: '#FFF'
    },
    {
      nome: 'Website',
      corPrimaria: '#82CFFA',
      corSecundaria: '#F2F2F2'
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

      <Rodape />

    </div>
  );
}

export default App;
