import './index.scss';
import Nav from '../../components/Nav';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Consulta() {

  const [produto, setProduto] = useState([]);


  async function buscar() {
    const url = 'http://localhost:3030/pizzaria/consulta/';
    let resp = await axios.get(url);
    setProduto(resp.data);
  }

  
  useEffect(() => {
    buscar()
  }, [])


  return (
    <div className="pagina-consulta">
      <Nav
        titulo="Consulta"
        rota="/"
        rota2="/Pedido"
        rota3="/Deletar"
        rota4="/Alterar"
        link="Home"
        link2="Pedidos"
        link3="Deletar"
        link4="Alterar"
      />
      <div className='consultar'>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>valor</th>
              <th>descrição</th>
              <th>quantidade</th>
            </tr>
          </thead>
          <tbody>
            {produto.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}