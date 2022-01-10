import TrackitLogo from '../img/TrackitLogoS.png'
import Checkmark from '../img/CheckMark.png'
import {Main, Header, TrackToday, Footer} from './styledToday'
import {Link} from 'react-router-dom'
import {useContext} from "react";
import UserContext from "../contexts/userContext";
import axios from 'axios'
import {useEffect} from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Today()
{
    
    let todayDate = dayjs().locale('pt-br').format('dddd, DD/MM')
    const {image, token, habitsToday, setHabitsToday, dayProgress, setDayProgress} = useContext(UserContext)
    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', token)
        request.then(response => setHabitsToday(response.data), error => console.log(error))
    },[])

    function ShowHabitProgress(){
        let doneCount = 0
        for(let i = 0; i < habitsToday.length; i++){
            if(habitsToday[i].done)
                doneCount++
        }
        if(doneCount === 0){
            setDayProgress(0)
            return <div className='not-started'>Nenhum hábito concluído ainda</div>
        }
        else{
            setDayProgress(((doneCount/habitsToday.length) * 100).toFixed(0))
            return <div className='progression'>{dayProgress}% dos hábitos concluídos</div>
        }   
    }

    function setHabitDone(id, done){
        if(!done){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, JSON.parse(localStorage.getItem("localToken")))
            request.then(() => reloadHabitsToday(), error => console.log(error))
        }
        else{
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, JSON.parse(localStorage.getItem("localToken")))
            request.then(() => reloadHabitsToday(), error => console.log(error))
        }
    }

    function reloadHabitsToday(){
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', JSON.parse(localStorage.getItem("localToken")))
        request.then(response => setHabitsToday(response.data), error => console.log(error))
    }

    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img className='user-pic' src={image} alt="user foto" />
        </Header>
        <TrackToday>
            <div className='title-percentage'>
                <div className='day'>{todayDate}</div>
                <ShowHabitProgress/>
            </div>
            <div className='habits-today'>
                {habitsToday.map(item =>
                <div className='habit-check'>
                    <div className='title'>
                        <div className='name'>{item.name}</div>
                        <div className='current-streak'>
                            <div>Sequência atual:  &nbsp;</div>
                            <div className={item.done ? 'text-done' : undefined}>{item.currentSequence} {item.currentSequence > 1 ? 'dias' : 'dia'}</div>
                        </div>
                        <div className='max-streak'>
                            <div>Seu recorde:  &nbsp;</div>
                            <div className={item.highestSequence === item.currentSequence && item.highestSequence > 0 ? 'text-done' : undefined}>{item.highestSequence} {item.currentSequence > 1 ? 'dias' : 'dia'}</div>
                        </div>
                    </div>
                    <div onClick={() => setHabitDone(item.id, item.done)} className={`checkmark ${item.done}`}>
                        <img src={Checkmark} alt="check logo" />
                    </div>
                </div>
                    )}
            </div>
        </TrackToday>
        <Footer>
            <Link to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
            <div>
            <CircularProgressbar
            value={dayProgress}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
            })}/>
            </div>
            <Link to={'/historico'}>
                <p>Histórico</p>
            </Link>
        </Footer>
        </Main>
    )
}