import styled from 'styled-components'
import { Container } from '../Section1/style'
import Section5 from '../../assets/background/Section5.webp'


export const Container5 = styled(Container)`
background-image:none;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
background-attachment: fixed;
height:100vh;
padding:0;

@media(max-width:480px)
{
  padding: 100px 20px;
  height:max-content;
  align-items:flex-start;
}
`

export const Title = styled.p`
    font-size: 40px;
    color: gainsboro;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;

    @media(max-width:480px)
    {
      font-size: 30px;
    }
`

export const Subtitle = styled.p`
    font-size: 25px;
    color: gainsboro;
    font-weight: 300;
    margin-top: 40px;

    @media(max-width:480px)
    {
      font-size: 19px;
    margin-top: 20px;
    max-width:250px;
    }
`

export const Buttons = styled.div`
/* border:solid 1px red; */
display:flex;
justify-content:center;
margin-top:60px;
.buttons {
  display: flex;
  flex-direction: row;
      flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 180px;
}

.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  max-width: 140px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border-radius:20px;
}
  .green{
  border: 4px solid green;
  background-color: green;
  }

  .insta{
      background:#c13584;
      border: 4px solid #c13584;
      box-sizing:content-box;

      &:hover{
          background:none;
      }
  }

  .link{
    border: 4px solid #003e80;
  background-color: #003e80;
  }
.btn:hover {
  text-decoration: none;
}

/*btn_background*/
.effect01 {
  color: #FFF;


  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.effect01:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow:0px 0px 0px 4px #EEE inset;
}

/*btn_text*/
.effect01 i {
  transition: all 0.2s ease-out;
  z-index: 2;
}
.effect01:hover i{
  letter-spacing: 0.13em;
  color: #333;
}

/*highlight*/
.effect01:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
}
.effect01:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
}

@media(max-width:480px)
{
  justify-content: flex-start;
  margin-top:40px;
  width:100%;

  .buttons{
    flex:1;
    margin:0 10px;
  }

  .btn{
    border-radius:0px;
    flex:1;
  }

  .container{
    width:100%;
  }
}
`