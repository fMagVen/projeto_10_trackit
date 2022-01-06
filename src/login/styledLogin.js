import styled from 'styled-components'

const LoginScreen = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        height: 180px;
        margin-top: 68px;
    }
    div{
        gap: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 33px;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    input::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-weight: 400;
        border: none;
        border-radius: 4.63636px;
        margin-bottom: 25px
    }
    span{
        text-decoration: underline;
        color: #52B6FF;
    }
`
export {LoginScreen}