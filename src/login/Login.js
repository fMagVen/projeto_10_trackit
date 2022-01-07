import {LoginScreen} from './styledLogin'
import TrackitLogo from '../img/TrackitLogoL.png'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import {useContext} from "react";
import UserContext from "../contexts/userContext";

export default function Login()
{
    const [emailLogin, setEmailLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()
    const [loading, setLoading] = useState(false)
    const { token, setToken } = useContext(UserContext)
    const navigate = useNavigate()

    function doLogin(e)
    {
        e.preventDefault()
        setLoading(true)
        const loginAccount = {email: emailLogin, password: passwordLogin}
        const requestLogin = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginAccount)
        requestLogin.then(r => success(r.data), (a) => error(a))
    }

    function success(response)
    {
        setToken(response.token)
        navigate('/hoje')
    }

    function error(response)
    {
        console.log(response)
        setLoading(false)
    }

    return(
        <LoginScreen>
            <img src={TrackitLogo} alt="Trackit Logo Large" />
            <form onSubmit={(e) => doLogin(e)}>
                <input type="email" onChange={(e) => setEmailLogin(e.target.value)} value={emailLogin} placeholder='email' required disabled={loading}/>
                <input type="password" onChange={(e) => setPasswordLogin(e.target.value)} value={passwordLogin} placeholder='senha' required disabled={loading}/>
                <button type="submit">{loading ? <Loader type="ThreeDots" color="#fff" height={13} width={51}/> : 'Entrar'}</button>
            </form>
            <Link to={'/cadastro'}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </LoginScreen>
    )
}