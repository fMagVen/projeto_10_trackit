import {LoginScreen} from './styledLogin'
import TrackitLogo from '../img/TrackitLogoL.png'
import {Link} from 'react-router-dom'

export default function SignUp()
{
    return(
        <LoginScreen>
            <img src={TrackitLogo} alt="Trackit Logo Large" />
            <div>
                <input type="text" placeholder='email' />
                <input type="text" placeholder='senha' />
                <input type="text" placeholder='nome' />
                <input type="text" placeholder='foto' />
                <button>Entrar</button>
            </div>
            <Link to={'/'}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </LoginScreen>
    )
}