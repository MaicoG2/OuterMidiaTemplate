import styled from 'styled-components'

import { Container } from '../Section3/style'


export const Container2 = styled(Container)`
align-items:center;
background:white;
padding:50px 90px 0 90px;

@media(max-width:480px)
{
  padding:50px 0 0 0;
}
`

export const Section1 = styled.div`

@media(max-width:480px)
{
  p{
    color:black;
    max-width:300px;
  }
}
`
export const Countdown = styled.ul`
height:200px;
background:#282828;
width: calc(100% + 180px);
margin-bottom: 90px;
display:flex;
justify-content: center;
padding: 0 90px;

@media(max-width:480px)
{
  display: flex;
    flex-direction: column;
    padding: 0;
    height: max-content;
    padding: 20px;
    margin-bottom:40px;
    width:100%;
}
`

export const Info = styled.li`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color: #FFF;
margin: 0 60px;

&>p{
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
}

div{
    display: flex;
    align-items: center;
    margin-top: 20px;
    i{
        font-size: 35px;
        color: #00dcff;
        padding-right: 35px;
    }
    p{
        font-size: 35px;
        font-weight: 200;
    }
}

@media(max-width:480px)
{
  margin: 20px 0;

  &>p{
    margin-bottom: 15px;
    font-weight: 700;
  }

  div{
    padding-bottom: 20px;
    border-bottom: solid 2px #ffffff3d;
  }
}
`

export const Gallery = styled.div`
  background-color: #000; 
  font-size: 0; width: 60%; 
  margin: 0 auto;

  figure{
    margin: 0; width: 50%; 
  height: auto; transition: 1s; 
  display: inline-block; 
  position: relative; overflow: hidden;

  img{
    width: 100%; height: auto;
  }

&:nth-child(1) { transform-origin: top left; }
&:nth-child(2) { transform-origin: top right; }
&:nth-child(3) { transform-origin: bottom left; }
&:nth-child(4) { transform-origin: bottom right; }

figcaption { 
  margin: 0; opacity: 0; 
  background: #000000d1; 
  color: #fff; padding: .3rem; 
  font-size: 1.2rem; 
  position: absolute; 
  bottom: 0; width: 100%;
	transition: 1s 1s opacity; 
  font-family: "Open Sans";
}

  &:hover{
    cursor: pointer; z-index: 4;
  }
  }

  .expanded { transform: scale(2); z-index: 5;  }
  figure.expanded figcaption { opacity: 1; }
  .full figure:not(.expanded) { pointer-events: none; }

  @media(max-width:480px)
  {
    width:100%;
    margin-top:20px;
  }
`

