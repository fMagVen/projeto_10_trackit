import {Main, Header, MyHabits, Footer} from './styledHabits'
import TrackitLogo from '../img/TrackitLogoS.png'
import trash from '../img/trash.png'
import {Link} from 'react-router-dom'
import {useContext, useState} from "react";
import UserContext from "../contexts/userContext";
import axios from 'axios'
import {useEffect} from 'react'
import Loader from 'react-loader-spinner'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Habits()
{
    const {image, token, theHabits, setTheHabits, dayProgress} = useContext(UserContext)
    const [showCreateNewHabitWindow, setShowCreateNewHabitWindow] = useState(false)
    const [newHabitName, setNewHabitName] = useState()
    const [loading, setLoading] = useState(false)
    const [newHabitDays, setNewHabitDays] = useState([
    {id: 0, day: 'D', selected: false},
    {id: 1, day: 'S', selected: false},
    {id: 2, day: 'T', selected: false},
    {id: 3, day: 'Q', selected: false},
    {id: 4, day: 'Q', selected: false},
    {id: 5, day: 'S', selected: false},
    {id: 6, day: 'S', selected: false}])
    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', token)
        request.then(response => setTheHabits(response), error => console.log(error))
    },[])

    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img className='user-pic' src={image} alt="user foto" />
        </Header>
        <MyHabits loading={loading}>
            <div className='my-habits'>
                <p>Meus hábitos</p>
                <button onClick={() => setShowCreateNewHabitWindow(true)}>+</button>
            </div>
            <CreateNewHabitWindow
            enableDisplay={showCreateNewHabitWindow}
            setEnableDisplay={setShowCreateNewHabitWindow}
            newHabitName={newHabitName}
            setNewHabitName={setNewHabitName}
            newHabitDays={newHabitDays}
            setNewHabitDays={setNewHabitDays}
            setTheHabits={setTheHabits}
            loading={loading}
            setLoading={setLoading}/>
            <ShowHabitsFunction habitProp={theHabits} setTheHabits={setTheHabits} setLoading={setLoading}/>
        </MyHabits>
        <Footer>
            <p>Hábitos</p>
            <Link to={'/hoje'}>
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
            </Link>
            <Link to={'/historico'}>
                <p>Histórico</p>
            </Link>
        </Footer>
        </Main>
    )
}

function ShowHabitsFunction(props){
    if(Array.isArray(props.habitProp.data) && props.habitProp.data.length > 0)
    return(
        <>
        {props.habitProp.data.map(item => 
            <div className='habit-overview'>
                <div className='title'>
                    <span>{item.name}</span>
                    <img onClick={() => deleteHabit(item.id, props.token, props.setTheHabits, props.setLoading)} src={trash} alt="trash logo" />
                </div>
                <div className='weekdays'>
                    <div className={`day ${item.days.includes(0)}`}>D</div>
                    <div className={`day ${item.days.includes(1)}`}>S</div>
                    <div className={`day ${item.days.includes(2)}`}>T</div>
                    <div className={`day ${item.days.includes(3)}`}>Q</div>
                    <div className={`day ${item.days.includes(4)}`}>Q</div>
                    <div className={`day ${item.days.includes(5)}`}>S</div>
                    <div className={`day ${item.days.includes(6)}`}>S</div>
                </div>
            </div>
            )}
        </>
    )
    else return(
        <div className="no-habits">
            <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
        </div>
    )
}

function CreateNewHabitWindow(props){
    if(props.enableDisplay){
        return(
            <div className='new-habit'>
                <input onChange={(e) => props.setNewHabitName(e.target.value)} value={props.newHabitName} type="text" placeholder='nome do hábito' disabled={props.loading} />
                <div className='weekdays'>
                {props.newHabitDays.map(item =>
                    <div onClick={() => chooseDay(item.id, item.day, item.selected, props.newHabitDays, props.setNewHabitDays)} className={`day ${item.selected}`}>{item.day}</div>
                )}
                </div>
                <div className='save-habit'>
                    <button onClick={() => props.setEnableDisplay(false)} className='cancel'>Cancelar</button>
                    <button onClick={() => finishNewHabit(props.newHabitName, props.newHabitDays, props.token, props.setTheHabits, props.setLoading)} className='save'>{props.loading ? <Loader type="ThreeDots" color="#fff" height={13} width={51}/> : 'Salvar'}</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}

function chooseDay(dayid, dayname, dayselected, habitDaysVar, setHabitDaysVar){
    
    let newHabitDaysReplacer = []
    for(let i = 0; i < habitDaysVar.length; i++){
        if(habitDaysVar[i].id === dayid && dayselected === false){
            newHabitDaysReplacer.push({id: dayid, day: dayname, selected: true})
        }
        else if(habitDaysVar[i].id === dayid && dayselected === true){
            newHabitDaysReplacer.push({id: dayid, day: dayname, selected: false})
        }
        else{
            newHabitDaysReplacer.push(habitDaysVar[i])
        }
    }
    setHabitDaysVar(newHabitDaysReplacer)
}

function finishNewHabit(hname, hdays, token, habits, load){
    load(true)
    let selectedDays = []
    for(let i = 0; i < hdays.length; i++){
        if(hdays[i].selected)
            selectedDays.push(hdays[i].id)
    }
    let sendToCreate = {name: hname, days: selectedDays}
    const requestCreateNewHabit = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', sendToCreate, token)
        requestCreateNewHabit.then(() => getNewHabitList(token, habits, load), (a) => console.log(a))
}

function getNewHabitList(t, h, l){
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', t)
        request.then(response => {l(false); h(response)}, error => console.log(error))
}

function deleteHabit(id, token, remainingHabits, load){
    if(window.confirm('Você gostaria realmente de apagar o hábito?')){
        const requestDeleteHabit = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, token)
        requestDeleteHabit.then(() => getNewHabitList(token, remainingHabits, load), error => console.log(error))
    }
}