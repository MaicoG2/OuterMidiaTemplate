import styled from 'styled-components'
import Section1 from '../../assets/background/Section1.jpg'

export const Container = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
width:100%;
padding:0 90px;


@keyframes fadeInUp {
  from { 
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@media(max-width:480px)
{
  padding: 20px;
}
`
export const Logo = styled.div`
opacity: 0;
animation: fadeInUp 1s ease-in-out 0s forwards;
animation-delay:1s;
display:flex;

img{
   width: 40vw;
}

@media(max-width:480px)
{
  img{
    width:85vw;
  }
}
`

export const Title = styled.div`
width:880px;
opacity: 0;
animation: fadeInUp 1s ease-in-out 0s forwards;
animation-delay:2.5s;
margin:20px 0 30px 0;

h1{
    height:max-content;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;

    p{
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
        text-decoration:none;
        cursor:pointer;
        font-size: 15px;
        font-style: italic;
        font-weight: 600;
        color: #FFF;
        line-height:30px;
        max-width:600px;

        &:nth-child(3){
            font-size:30px;
            font-weight:300;
        }
    }
}

@media(max-width:480px){
  width:100%;

  h1{
    p{
      font-weight:300;
      width:85vw;
    }
  }
}
`

export const Button = styled.button`
width:150px;
height:44px;

border:solid 1px grey;
background-color:rgba(255, 255, 255, 0.1);
border-radius:3px;
outline:none;

transition:all .3s;
opacity: 0;
animation: fadeInUp 1s ease-in-out 0s forwards;
animation-delay:3.5s;

a
{
    display: inline-block;
    position: relative;
    font-weight: 600;
    transition: 0.3s;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color:white;
    text-decoration:none;
    cursor:pointer;

    &:after{
        font-family: "Font Awesome 5 Free";
        content: "\f063";
        position: absolute;
        opacity: 0;
        top: 3px;
        right: -20px;
        transition: 0.2s;
    }
}

&:hover 
{
    background-color:#0d9fc0;
    border:none;
    a{
        padding-right: 25px;
        color:white;
    }
}


&:hover a:after{
    opacity: 1;
    right: 0;
}

@media(max-width:480px)
{
  margin-right:0;
}

`

export const Video = styled.div`
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;

  .video-foreground,
  iframe{
    position: absolute;
  top: 0px;
  bottom:-50px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  }


  .video-foreground{
    padding-bottom: 56.25%;

    @media(max-width: 480px)
    {
      padding: 0;
    }
  }

  .background{
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    background: linear-gradient(rgb(0 0 0 / 82%),rgb(0 0 0 / 73%));
  }

  img {
    display: none;
  }

  @media(max-width: 480px)
  {

    .video-foreground {
      iframe {
        display: none;
      }
    }
    img {
      display: flex;
      width: 100vw;
      height: 100vh;
    }
  }
`

export const DropDown = styled.div`
  position: relative;
  display: inline-block;

  button{
    position: relative;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color:white;
    text-decoration:none;
    cursor:pointer;
  }

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 0 0 10px 10px;


  i{
    margin-right:10px;
    font-size:20px;
  }

  @media(max-width:480px)
  {
    border-radius: 0;

  }
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display:flex;
  transition:all .4s;
}

.dropdown-content a:hover {background-color: #d8d8d8;
  border-radius: 0 0 10px 10px;
  }

&:hover .dropdown-content {
  display: block;
}

&:hover button {
  background-color: #0d9fc0;
}
`