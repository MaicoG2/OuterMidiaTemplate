import styled,{css} from 'styled-components'

export const Container = styled.header`
display:flex;
align-items:center;
padding: 0 90px;
transition: all .8s ease;
animation-delay:.8s;
z-index: 5;
height:90px;
justify-content:center;

${({change}) => change ? 
css`
position:fixed;
transform:translateY(0);
height:50px;
width:100%;
flex-direction:row;
justify-content:space-between;
background:#ffffff;
box-shadow: 0 0 9px #0000003d;
`:
css`
position:absolute;
flex-direction:column;
transform:translateY(-500px);
`
}

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

div,nav{
    opacity: 0;
    animation: fadeInUp 1s ease-in-out 0s forwards;
}
`
export const Logo = styled.div``

export const Zap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  text-align: center;
  cursor:pointer;
  overflow:hidden;

  .cta {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #15ce2a;
  background-color: #15ce2a;
  color: #fff;
  transition: width 0.7s;
  cursor:pointer;
  overflow:hidden;
}
.cta:hover {
  width: 180px;
  transition: width 0.7s;
}

.cta i {
  opacity: 1;
  transition: opacity 0.5s;
  font-size:30px;
}

.cta:hover i {
  opacity: 0;
  transition: opacity 0.5s
}

.cta .button-text {
  opacity: 0;
  transition: opacity .5s;
  position: absolute;
  width: 100%;
  left: 0;
  line-height:30px;
  color:white;
  text-decoration:none;
 }

.cta:hover .button-text {
  opacity: 1;
  transition: opacity 0.5s
}
`

export const Nav = styled.nav`
height:100%;
ul{
    display:flex;
    height:100%;

    li{
        font-weight: 500;
        text-transform: uppercase;
        font-size: 11px;
        margin: 0 20px;
        letter-spacing: 1px;
        list-style:outside none none;
        color: ${({change}) => change ? '#212121':'white'};
        transition:all .8s;
        cursor:pointer;
        height:100%;

        :hover{
            color:${({change}) => change ? '#38d5e0':'grey'}
        }

        a{
          display: flex;
          align-items: center;
          justify-content: center;
          height:100%;
        }
    }
}

.active{
  color:#38d5e0;
}
`