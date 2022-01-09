import styled from "styled-components";
const Main = styled.div`
position: relative;
`
const Header = styled.div`
position: fixed;
z-index: 1;
top: 0;
width: 100%;
height: 70px;
background-color: #126BA5;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
img{
    margin: 0 20px 0;
}
.user-pic{
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
}
`
const TrackToday = styled.div`
margin: 70px 0 70px;
background-color: #E5E5E5;
padding: 28px 17px 28px;
.title-percentage{
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 400;
    .day{
        font-size: 23px;
        color: #126BA5;
    }
    .not-started{
        font-size: 18px;
        color: #BABABA;
    }
    .progression{
        font-size: 18px;
        color: #8FC549;
    }
}
.habits-today{
    margin-top: 30px;
    .habit-check{
        border-radius: 5px;
        padding: 13px;
        margin-bottom: 10px;
        display: flex;
        background-color: #fff;
        justify-content: space-between;
        .title{
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .name{
            font-size: 20px;
            color: #666666;
            margin-bottom: 7px;
        }
        .current-streak{
            display: flex;
            margin-bottom: 2px;
        }
        .max-streak{
            display: flex;
        }
        .checkmark{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 70px;
            img{
                height: 28px;
                width: 35px;
            }
        }
        .false{
            background-color: #E7E7E7;
        }
        .true{
            background-color: #8FC549;
        }
        .text-done{
            color: #8FC549;
        }
    }
}`

const Footer = styled.div`
position: fixed;
z-index: 1;
bottom: 0;
width: 100%;
height: 70px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-evenly;
p{
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
}
div{
    width: 91px;
    height: 91px;
    margin-top: -50px;
}
`

export{Main, Header, TrackToday, Footer}