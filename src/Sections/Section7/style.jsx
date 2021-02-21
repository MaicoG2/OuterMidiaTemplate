import styled from 'styled-components'
import { Container } from '../Section1/style'
import { Default } from '../../Pages/Home/style'

export const Container7 = styled(Container)`
background:white;
min-height:100vh;
height:max-content;
padding: 80px 90px;

@media(max-width:480px)
{
    display:none;
}
`

export const Subtitle = styled.span`
color: grey;
max-width: 540px;
text-align: center;
font-size: 16px;
line-height: 1.5;
`


export const Team = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
margin:80px 0;
`

export const Card = styled(Default)`
justify-content:center;
margin-right:80px;

`

export const Image = styled(Default)`

div:nth-child(1){
height: 200px;
width: 200px;
border-radius: 50%;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
}

`

export const Description = styled.div`
margin-top:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;

   p:nth-child(1)
    {
    color: #272727;
    font-weight: 800;
    font-size: 20px;
    text-transform:uppercase;
    }

   p:nth-child(3)
    {
        color: #777777;
    font-size: 16px;
    max-width: 180px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing:1px;
    font-style: oblique;
}

div{
    margin-top:20px;
}
i{
    margin-right: 15px;
    font-size:25px;
    color:grey;
    cursor:pointer;
    transition:all .2s;

    &:hover{
        color:#6f0b88;
    }
}
    
`