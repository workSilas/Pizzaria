import './index.scss';
import Nav from '../../components/Nav';
import axios from 'axios';
import { useState } from 'react';

export default function Alterar() {
  
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [id, setId] = useState('');

  const paramCorpo = {
    "nome": nome,
    "valor": valor,
    "descricao": descricao,
    "quantidade": quantidade
  }


  async function alterar() {
    let url = ('http://localhost:3030/pizzaria/alterar/' + id)
    let resp = await axios.put(url, paramCorpo);
    alert('Produto alterado');
  }


  return (
    <div className="Alterar">
      <Nav
        titulo="Alterar"
        rota="/"
        rota2="/Consulta"
        rota3="/Pedido"
        rota4="/Deletar"
        link="Home"
        link2="Consulta"
        link3="Pedidos"
        link4="Deletar"
      />

      <div className='form'>
        <div>
          <label>ID do produto:</label>
          <input type='text' value={id} onChange={e => setId(e.target.value)} />
        </div>
        <div>
          <label>Nome:</label>
          <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div>
          <label>Valor:</label>
          <input type='text' value={valor} onChange={e => setValor(e.target.value)} />
        </div>
        <div>
          <label>Descricao:</label>
          <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
        </div>
        <div>
          <label>Quantidade:</label>
          <input type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)} />
        </div>
      </div>
      <button onClick={alterar}> SALVAR </button>
    </div>
  );
}