import {LoginScreen} from './styledLogin'
import TrackitLogo from '../img/TrackitLogoL.png'
import {Link, useNavigate} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios'
import {useState} from 'react'

export default function SignUp(props)
{
    const [emailSignUp, setEmailSignUp] = useState()
    const [passwordSignUp, setPasswordSignUp] = useState()
    const [name, setName] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function doSignUp(e){
        e.preventDefault()
        setLoading(true)
        const createAccount = {email: emailSignUp, name: name, image: pic, password: passwordSignUp}
        const requestCreateAccount = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', createAccount)
        requestCreateAccount.then(() => navigate('/'), (a) => error(a))
    }

    function error(a){
        setLoading(false)
        alert('erro')
        console.log(a)
    }

    return(
        <LoginScreen loading={loading}>
            <img src={TrackitLogo} alt="Trackit Logo Large" />
            <form onSubmit={(e) => doSignUp(e)}>
                <input onChange={(e) => setPasswordSignUp(e.target.value)} value={passwordSignUp} type="password" placeholder='senha' required disabled={loading}/>
                <input onChange={(e) => setEmailSignUp(e.target.value)} value={emailSignUp} type="email" placeholder='email' required disabled={loading}/>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='nome' required disabled={loading}/>
                <input onChange={(e) => setPic(e.target.value)} value={pic} type="text" placeholder='foto' required disabled={loading}/>
                <button type="submit">{loading ? <Loader type="ThreeDots" color="#fff" height={13} width={51}/> : 'Cadastrar'}</button>
            </form>
            <Link to={'/'}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </LoginScreen>
    )
}