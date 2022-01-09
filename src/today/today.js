import TrackitLogo from '../img/TrackitLogoS.png'
import bobesponja from '../img/bobesponja.png'
import Checkmark from '../img/CheckMark.png'
import {Main, Header, TrackToday, Footer} from './styledToday'
import {Link} from 'react-router-dom'
import {useContext} from "react";
import UserContext from "../contexts/userContext";
import axios from 'axios'
import {useEffect} from 'react'

export default function Today()
{
    const {token, image, habitsToday, setHabitsToday} = useContext(UserContext)
    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', token)
        request.then(response => setHabitsToday(response), error => console.log(error))
    },[])

    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img className='user-pic' src={image} alt="user foto" />
        </Header>
        <TrackToday>
            <div className='title-percentage'>
                <div className='day'>Segunda, 17/05</div>
                <div className='not-started'>Nenhum hábito concluído ainda</div>
                <div className='progression'>67% dos hábitos concluídos</div>
            </div>
            <div className='habits-today'>
                <div className='habit-check'>
                    <div className='title'>
                        <div className='name'>Ler 1 capítulo de livro</div>
                        <div className='current-streak'>
                            <div>Sequência atual:</div>
                            <div>4 dias</div>
                        </div>
                        <div className='max-streak'>
                            <div>Seu recorde:</div>
                            <div>5 dias</div>
                        </div>
                    </div>
                    <div className='checkmark'>
                        <img src={Checkmark} alt="check logo" />
                    </div>
                </div>
            </div>
        </TrackToday>
        <Footer>
            <Link to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
            <img src={bobesponja} alt="Hoje" />
            <Link to={'/historico'}>
                <p>Histórico</p>
            </Link>
        </Footer>
        </Main>
    )
}