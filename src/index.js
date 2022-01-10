import ReactDOM from 'react-dom'
import './styles/reset.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login/Login'
import SignUp from './login/Signup'
import Habits from './habits/habits'
import Today from './today/today'
import History from './history/history'
import UserContext from './contexts/userContext'
import {useState} from 'react'


function App()
{
    const [habitsToday, setHabitsToday] = useState([])
    const [theHabits, setTheHabits] = useState([])
    const [dayProgress, setDayProgress] = useState(0)

    const tokenFromLocalStorage = JSON.parse(localStorage.getItem("localToken"))
    const imageFromLocalStorage = localStorage.getItem("localUserImage")
    const [token, setToken] = useState(tokenFromLocalStorage)
    const [image, setImage] = useState(imageFromLocalStorage)


    function setPersistImageToken(image, token){
        setToken({headers: {Authorization: `Bearer ${token}`}})
        localStorage.setItem("localToken", JSON.stringify({headers: {Authorization: `Bearer ${token}`}}))
        setImage(image)
        localStorage.setItem("localUserImage", image)
    }

    return(
        <UserContext.Provider value={{setPersistImageToken, habitsToday, setHabitsToday, token, setToken, image, setImage, theHabits, setTheHabits, dayProgress, setDayProgress}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/cadastro' element={<SignUp/>}></Route>
                    <Route path='/habitos' element={<Habits/>}></Route>
                    <Route path='/hoje' element={<Today/>}></Route>
                    <Route path='/historico' element={<History/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App/>, document.querySelector('.root'))