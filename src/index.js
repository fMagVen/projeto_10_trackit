import ReactDOM from 'react-dom'
import './styles/reset.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login/Login'
import SignUp from './login/Signup'
import Habits from './habits/habits'
import Today from './today/today'
import History from './history/history'


function App()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/cadastro' element={<SignUp/>}></Route>
                <Route path='/habitos' element={<Habits/>}></Route>
                <Route path='/hoje' element={<Today/>}></Route>
                <Route path='/historico' element={<History/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.querySelector('.root'))