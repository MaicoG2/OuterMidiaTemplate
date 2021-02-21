import styled from 'styled-components'

import { Container } from '../Section1/style'
import { Title, Division, Section, Description, SectionLeft } from '../Section2/style'


export const Title8 = styled(Title)`
line-height:35px;
text-align:center;
max-width:600px;

@media(max-width:480px)
{
  max-width:300px;
  color:black;
  text-align:left;
}
`

export const Division8 = styled(Division)`
margin-bottom:30px;

@media(max-width:480px)
{
  margin: 0 0 15px 0;
}
`

export const Container8 = styled(Container)`
background:white;
height:max-content;
padding:100px 0;

@media(max-width:480px)
{
  padding:50px 20px;
}
`

export const Button = styled.div`
    width: 280px;
    height: 60px;
    background: #dfe6e9;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: .3s linear;
    margin-top: 60px;

&:hover{
  transform: scale(1.1);
}
& span{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #32b64c;
  color: #f1f1f1;
  text-align: center;
  line-height: 60px;
  z-index: 999;
  transition: .6s linear;
  border-radius: 40px;
  text-transform:uppercase;
  font-weight:800;
  letter-spacing:1px;
  font-family: Quicksand;
 
}
&:hover span{
  transform: translateX(-100%);
  transition-delay: .3s;
}
& a {
  flex: 1;
  font-size: 26px;
  margin-right: 20px;
  color: #2d3436;
  text-align: center;
  transform: translateX(-100%);
  opacity: 0;
  transition: .3s linear;
}
&:hover a {
  opacity: 1;
  transform: translateX(0);
}
& a:nth-of-type(1){
  transition-delay: 1s;
}
& a:nth-of-type(2){
  transition-delay: .8s;
}
& a:nth-of-type(3){
  transition-delay: .6s;
}
& a:nth-of-type(4){
  transition-delay: .4s;
}
`

export const Description8 = styled(Description)`

p:nth-child(1)
{
  font-weight:700;
  margin-bottom:15px;
  text-transform:uppercase;
  text-align:left;
}

p:nth-child(2){
  text-align:left;
}

@media(max-width:480px){
  p:nth-child(1),
  p:nth-child(2)
{
color:#5c5c5c;
margin:0 0 15px 0;
}
}
`