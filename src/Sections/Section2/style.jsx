import styled from 'styled-components'

//styled
import { Container } from '../Section1/style'

import Teste from '../../assets/images/beira-mar.jpg'

export const Container2 = styled(Container)`
padding:0px;
background-image:none;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
background-attachment: fixed;
background-image:url(${Teste});
align-items:flex-start;

&>span,li{
    opacity:0;
    animation: ${({animation})=> animation ? 'fadeInUp 1s ease-in-out 0s forwards':""};
}

.section2{
width:100%;
background: white;
clip-path: polygon(0 0, 35% 0, 55% 100%, 0 100%);
align-items: flex-start;
padding-left: 90px;
display:flex;
flex-direction:column;
justify-content:center;
height:100%;
}

@media(max-width:480px)
{
    .section2{
        clip-path:none;
        padding:0 20px;
        width:100%;
        align-items:center;
        background:#000000b8;
        justify-content: flex-start;
        padding-top: 15vh;
    }
}
`

export const Section = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;

`

export const SectionLeft = styled(Section)`
flex: 2;
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
overflow:hidden;
`

export const Title = styled.p`
font-size: 26px;
color: #222;
text-transform:uppercase;
font-weight:300;
width:400px;
text-align:left;
max-width:500px;
line-height: 40px;
width:100%;
span{
    font-weight:800;
}

@media(max-width:480px)
{
    max-width:100%;
    color:white;
    text-align:center;
}
`

export const Description = styled.div`
text-align: left;
font-size: 15px;
line-height: 23px;
color: #656565;
max-width: 400px;

p:nth-child(1)
{
    margin: 0 0 20px 0;
}

@media(max-width:480px)
{
    width:100%;

    p:nth-child(1)
    {
    margin: 20px 0px;
    color: #e0e0e0;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    letter-spacing: .5px;
    }

    p:nth-child(2)
    {
        color: white;
    text-align: center;
    letter-spacing: .5px;
    }
}
`

export const Division = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:15px 0 40px 0;

div:nth-child(2)
{
    width:7px;
    height:7px;
    border:1px solid #cbcbcb;
}

div:nth-child(1),
div:nth-child(3)
{
    width:30px;
    height:1px;
    background: #cbcbcb;
}

@media(max-width:480px)
{
    margin:15px;
}
`



