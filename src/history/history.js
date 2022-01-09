import TrackitLogo from '../img/TrackitLogoS.png'
import {Main, Header, TrackLog, Footer} from './styledHistory'
import {Link} from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import {useContext} from "react";
import UserContext from "../contexts/userContext";

export default function History()
{
    const {token, image, dayProgress} = useContext(UserContext)
    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img className='user-pic' src={image} alt="user foto" />
        </Header>
        <TrackLog>
            <div className='title'>Histórico</div>
            <div className='text'>Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
        </TrackLog>
        <Footer>
            <Link to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
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
            <p>Histórico</p>
        </Footer>
        </Main>
    )
}