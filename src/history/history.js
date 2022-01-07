import TrackitLogo from '../img/TrackitLogoS.png'
import bobesponja from '../img/bobesponja.png'
import {Main, Header, TrackLog, Footer} from './styledHistory'
import {Link} from 'react-router-dom'

export default function History()
{
    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img src={bobesponja} alt="user picture" />
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
            <img src={bobesponja} alt="Hoje" />
            </Link>
            <p>Histórico</p>
        </Footer>
        </Main>
    )
}