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

const TrackLog = styled.div`
margin: 70px 0 70px;
padding: 17px;
display: flex;
flex-direction: column;
gap: 7px;
.title{
    font-size: 23px;
    color: #126BA5;
}
.text{
    font-size: 18px;
    color: #666666;
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

export{Main, Header, TrackLog, Footer}