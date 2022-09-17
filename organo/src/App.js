import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Pedidos from './components/Pedidos';

function App() {

  const produtos = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
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
        clientes={clientes.filter(cliente => cliente.time === produto.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;
