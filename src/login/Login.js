import {LoginScreen} from './styledLogin'
import TrackitLogo from '../img/TrackitLogoL.png'
import {Link} from 'react-router-dom'

export default function Login()
{
    return(
        <LoginScreen>
            <img src={TrackitLogo} alt="Trackit Logo Large" />
            <div>
                <input type="text" placeholder='email' />
                <input type="text" placeholder='senha' />
                <button>Entrar</button>
            </div>
            <Link to={'/cadastro'}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </LoginScreen>
    )
}