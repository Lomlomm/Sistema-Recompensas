
import '../style/Homepage.css';
import avatar from '../img/avatar.png'
import regalo from '../img/regalo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Recompensas from './Recompensas';

function Homepage() {
  return (
    <div className="homepage">
      <div className='usuario'>
          <div className='info'>
            <div className='text-info'>
              <p id='welcome'>Bienvenido de nuevo</p>
              <p id='nombre'>Hola Usuario</p>
            </div>
            <img src={avatar} className="Avatar-logo" alt="avatar"/>
          </div>
      </div>
      <div className='Tarjeta'>
        <Link to='/usqr' className='link-tarjeta'>
        <div className='texto-tarjeta'>
          <div className='up-tarjeta'>
            <p className='titulo-tarjeta'>Recompensas</p>
            <img src={regalo} className='icono-regalo' alt='regalo'/>{/* icono dinero */}
          </div>
          <div className='down-tarjeta'>
            <p id='puntos'>149 pts</p>
            <p id='nivel'>Nivel: 2</p>
            <div role='progressbar' className='progressbar'>
              <div className='progress'></div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      <div className='Recompensas'>
        <div className='titulo-recompensas'>
            Mis premios
        </div>
      </div>
      <Recompensas/>
    </div>
  );
}

export default Homepage;
