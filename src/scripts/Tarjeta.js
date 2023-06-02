
import '../style/Tarjeta.css';
import avatar from '../img/avatar.png'
import regalo from '../img/regalo.png'
import qr from '../img/qrtarjeta.png'
import { Link } from 'react-router-dom';

const faltan = 10
function Tarjeta() {
  return (
    <div className='page'>
        <div className='header'>
            <Link to='/' className='home'>
                <div className='home'></div>
            </Link>
        </div>
        <div className='content'>
            <div className="page-tarjeta">
                <div className='qr-container'>
                    <div className='up-container'>
                        <div className='titulo-qr'>LOGO EMPRESA</div>
                        <div className='usuario-qr'>USUARIO</div>
                    </div>
                    
                    <div className='down-container'>
                        <div className='nivel-usuario'>NIVEL 2</div>
                        <img src={qr} className='qr'/>
                    </div>
                </div>
            </div>
            <div className="info-tarjeta">
                <div className='saldo'>
                    <div className='up-container'>
                        <div className='texto-saldo'>SALDO:</div>
                        <div className='puntos'>50</div>
                        <div className='puntos-disponibles'>Puntos disponibles</div>
                    </div>
                    <div className='down-container'>
                        <div className='faltante'>Te faltan {faltan} compras para alcanzar el nivel 3 con nuevas recompensas!</div>
                        <div role='progressbar' className='progressbar-usqr'>
                            <div className='progress-usqr'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  );
}

export default Tarjeta;
