import TrackitLogo from '../img/TrackitLogoS.png'
import bobesponja from '../img/bobesponja.png'
import {Main, Header, Footer} from './styledToday'
import {Link} from 'react-router-dom'

export default function Today()
{
    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img src={bobesponja} alt="user picture" />
        </Header>
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