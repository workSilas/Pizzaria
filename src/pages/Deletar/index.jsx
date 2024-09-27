import './index.scss';
import Nav from '../../components/Nav';
import axios from 'axios';
import { useState } from 'react';

export default function Deletar() {

  const [id, setId] = useState('');

  async function deletar() {
    let url = ('http://localhost:3030/pizzaria/delete/' + id)
    let resp = await axios.delete(url);
    alert('Produto deletado');
  }


  return (
    <div className="Deletar">
      <Nav
        titulo="Deletar"
        rota="/"
        rota2="/Consulta"
        rota3="/Pedido"
        rota4="/Alterar"
        link="Home"
        link2="Consulta"
        link3="Pedidos"
        link4="Alterar"
      />

      <div className='form'>
        <div>
          <label>ID do produto:</label>
          <input type='text' value={id} onChange={e => setId(e.target.value)} />
        </div>
      </div>
      <button onClick={deletar}> DELETAR </button>
    </div>
  );
}