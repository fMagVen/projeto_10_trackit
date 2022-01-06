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
`
const MyHabits = styled.div`
    background-color: #F2F2F2;
    margin: 70px 0 70px;
    .my-habits{
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-weight: 400;
            font-size: 23px;
            color: #126BA5;
            margin-left: 20px;
        }
        button{
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: 400;
            font-size: 27px;
            margin-right: 20px;
        }
    }
    .new-habit{
        margin: 0 18px 0;
        padding: 0 18px 15px;
        width: auto;
        background-color: #fff;
        border-radius: 5px;
        input{
            margin-top: 18px;
            width: 100%;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
        }
        input::placeholder{
            font-weight: 400;
            font-size: 20px;
            color: #DBDBDB;
        }
    }
    .weekdays{
        display: flex;
        gap: 4px;
        margin-top: 8px;
        .day{
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            background-color: #fff;
            color: #D4D4D4;
            font-size: 20px;
            font-weight: 400;
        }
    }
    .save-habit{
        display: flex;
        justify-content: flex-end;
        margin-top: 32px;
        .cancel{
            background-color: #fff;
            border: none;
            color: #52B6FF;
            font-weight: 400;
            font-size: 16px;
            margin: 0 20px 0;
        }
        .save{
            width: 84px;
            height: 35px;
            border: none;
            border-radius: 5px;
            font-weight: 400;
            font-size: 16px;
            color: #fff;
            background-color: #52B6FF;
        }
    }
    .habit{
        margin: 10px 18px 0;
        width: auto;
        padding: 13px 18px 15px;
        border-radius: 5px;
        background-color: #fff;
        .title{
            display: flex;
            justify-content: space-between;
            span{
                font-weight: 400;
                font-size: 20px;
            }
            img{
                width: 13px;
                height: 15px;
            }
        }
    }
    .no-habits
    {
        margin: 30px 18px;
        padding-bottom: 50px;
        span{
            font-weight: 400;
            font-size: 18px;
            color: #666666;
        }
    }
`

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
`

export{Main, Header, MyHabits, Footer}