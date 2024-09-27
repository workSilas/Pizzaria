import './index.scss';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className="Nav">
      <h1>{props.titulo}</h1>
      <div className='sessao'>
        <Link to={props.rota}>{props.link}</Link>
        <Link to={props.rota2}>{props.link2}</Link>
        <Link to={props.rota3}>{props.link3}</Link>
        <Link to={props.rota4}>{props.link4}</Link>
      </div>
    </div>
  );
}

/*
{
  titulo=""
  rota=""
  rota2=""
  link=""
  link2=""
}
*/