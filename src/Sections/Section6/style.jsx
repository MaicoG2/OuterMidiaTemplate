import styled from 'styled-components'

import { Container } from '../Section1/style'


export const Container6 = styled(Container)`
background:white;
padding:0px;
justify-content:flex-start;
order:3;
padding: 0 0 150px 0;
height:max-content;

@media(max-width:480px)
{
    padding:50px 20px;
}
`
export const Card = styled.div`
width:328px;
height:143px;
display:flex;
margin-right:30px;

i{
    font-size:45px;
    margin-right:36px;
}

p:nth-child(1)
{
    font-size:20px;
    margin-bottom:9px;
    font-weight:700;
    color: #3a3a3a;
}

p:nth-child(2)
{
    font-size: 15px;
    line-height: 25px;
    color: #676464;
}

@media(max-width:480px)
{
    margin:15px 0;
    width:100%;
    height:100%;
    margin: 15px 0;
    width: 100%;
    border: solid 2px #d8d7d7;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 10px 20px -10px black;
    height: 100%;

    i{
        margin-right:30px;
    }
}`

export const Line = styled.div`
display:flex;
align-items:center;
margin-top:50px;

@media(max-width:480px)
{
    flex-direction:column;
    margin:0 0 5px 0;
}`

export const Section2 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`