import './index.scss';
import Nav from '../../components/Nav';
import axios from 'axios';
import { useState } from 'react';

export default function Pedido() {

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');


  async function salvar() {
    const paramCorpo = {
      "nome": nome,
      "valor": valor,
      "descricao": descricao,
      "quantidade": quantidade
    }

    const url = 'http://localhost:3030/pizzaria/inserir/';
    let resp = await axios.post(url, paramCorpo);
    
    setNome('')
    setValor('')
    setDescricao('')
    setQuantidade('')

    alert('Produto adicionado na lista. Id: ' + resp.data.novoId);
  }

  return (
    <div className="pagina-pedido">
      <Nav
        titulo="Pedido"
        rota="/"
        rota2="/Consulta"
        rota3="/Deletar"
        rota4="/Alterar"
        link="Home"
        link2="Consulta"
        link3="Deletar"
        link4="Alterar"
      />
      <div className='form'>
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
      <button onClick={salvar}> SALVAR </button>
    </div>
  );
}