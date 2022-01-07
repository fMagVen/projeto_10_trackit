import {Main, Header, MyHabits, Footer} from './styledHabits'
import TrackitLogo from '../img/TrackitLogoS.png'
import bobesponja from '../img/bobesponja.png'
import trash from '../img/trash.png'
import {Link} from 'react-router-dom'

export default function Habits()
{
    return(
        <Main>
        <Header>
            <img src={TrackitLogo} alt="Trackit Logo Small" />
            <img src={bobesponja} alt="user foto" />
        </Header>
        <MyHabits>
            <div className='my-habits'>
                <p>Meus hábitos</p>
                <button>+</button>
            </div>
            <div className='new-habit'>
                <input type="text" placeholder='nome do hábito' />
                <div className='weekdays'>
                    <div className='day'>D</div>
                    <div className='day'>S</div>
                    <div className='day'>T</div>
                    <div className='day'>Q</div>
                    <div className='day'>Q</div>
                    <div className='day'>S</div>
                    <div className='day'>S</div>
                </div>
                <div className='save-habit'>
                    <button className='cancel'>Cancelar</button>
                    <button className='save'>Salvar</button>
                </div>
            </div>
            <div className='habit-overview'>
                <div className='title'>
                    <span>Ler 1 capítulo de livro</span>
                    <img src={trash} alt="trash logo" />
                </div>
                <div className='weekdays'>
                    <div className='day'>D</div>
                    <div className='day'>S</div>
                    <div className='day'>T</div>
                    <div className='day'>Q</div>
                    <div className='day'>Q</div>
                    <div className='day'>S</div>
                    <div className='day'>S</div>
                </div>
            </div>
            <div className="no-habits">
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </div>
        </MyHabits>
        <Footer>
            <p>Hábitos</p>
            <Link to={'/hoje'}>
                <img src={bobesponja} alt="Hoje" />
            </Link>
            <Link to={'/historico'}>
                <p>Histórico</p>
            </Link>
        </Footer>
        </Main>
    )
}
