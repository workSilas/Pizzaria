import './index.scss';
import Nav from '../../components/Nav';

export default function Home() {
  return (
    <div className="pagina-home">
      <Nav
        titulo="Pizzaria"
        rota="/Consulta"
        rota2="/Pedido"
        rota3="/Deletar"
        rota4="/Alterar"
        link="Consulta"
        link2="Pedidos"
        link3="Deletar"
        link4="Alterar"
      />
      <div className='main'>
          <img src="./assets/images/Pizza.jpg" alt="Pizza" />
      </div>
    </div>
  );
}