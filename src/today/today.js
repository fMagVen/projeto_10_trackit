import TrackitLogo from '../img/TrackitLogoS.png'
import bobesponja from '../img/bobesponja.png'
import Checkmark from '../img/CheckMark.png'
import {Main, Header, TrackToday, Footer} from './styledToday'
import {Link} from 'react-router-dom'

export default function Today()
{
    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img src={bobesponja} alt="user picture" />
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