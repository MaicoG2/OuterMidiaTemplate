import styled from 'styled-components'

import { Description,SectionLeft,Section, Title} from '../Section2/style'


export const Container = styled.section`
min-height:100vh;
max-height:max-content;
width:100%;
display:flex;
justify-content:center;
background:white;
flex-direction:column;

@media(max-width:480px)
{
    background:#4291dc;
    justify-content:flex-start;
}
`

export const Section33 = styled(Section)`
align-items:flex-start;
margin-left:10vw;

@media(max-width:480px)
{
    margin:0;
    align-items:center;
    padding: 20px 0 20px 0;
}
`

export const SectionLeft2 = styled(SectionLeft)`
order: 0;
max-width: 70%;

@media(max-width:480px)
{
    max-width:100%;

    img{
        width:100%;
    }
}
`

export const SectionLeft3 = styled(SectionLeft)`
order:0;
flex:1;

@media(max-width:480px)
{
    margin-top:-15vh;
}
`

export const Section2 = styled(Section)`
align-items: flex-start;
padding-left: 5vw;
background: white;
position: absolute;
height: max-content;
right: calc(70% - 90px);
border: solid 1px #80808070;
padding: 40px;
box-shadow: 0px 50px 20px -40px #000000b5;

@media(max-width:480px)
{
    position:relative;
    align-items:center;
    right:0;
    width:100%;
    padding:20px;
    box-shadow:none;
    border:none;

    &>p{
        color:black;
    }
}
`

export const About = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding:0 90px;
margin:150px 0;

div{clip-path:none;}

p
{
    display:flex;
    align-items:center;
    margin:10px 0;
}
i{
    font-size:30px;
    margin-right:10px;
    color:#29b329
}

@media(max-width:480px)
{
    margin:0;
    padding:0;
    flex-direction:column;
}
`

export const Description2 = styled(Description)`
display: flex;
align-items: center;

p
{
    font-size: 15px;
    display: flex;
    text-align: left;
    max-width: 300px;

    span{
    font-weight: 700;
    font-size: 45px;
    margin-right: 10px;
    color: #0ab30a;
    }
}

i
{
    font-size: 50px;
    margin-right: 15px;
    color: #29b329;
}

@media(max-width:480px)
{
    margin-top:0;
    justify-content:center;
    flex-direction:column;
    max-width:250px;
    p{
        flex-direction:column;
        align-items:center;
        color:#1d1d1d!important;
        font-weight:500;
        font-size:16px;


        span{
        line-height:50px;
        margin:0;
        font-weight:800;
        }
    }

    i{
        margin:0;
    }
}
`

export const Description33 = styled(Description)`
p:nth-child(1)
{
    font-weight:700;
    margin-bottom:15px;
    text-transform:uppercase;
    text-align:left;
}
p:nth-child(2)
{
    text-align:left;
}

@media(max-width:480px)
{
    p:nth-child(1),
    p:nth-child(2){
        margin: 0 20px 20px 20px;
        text-align:center;
    }
}
`

export const Sec3 = styled.div`
display:flex;

p:nth-child(1)
{
    font-size: 200px;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: green;
    line-height:0;
    margin: 0 10px 0 0;
}

p:nth-child(2){
    font-size: 40px;
    max-width: 250px;
    display: flex;
    align-items: center;
    font-weight: 800;
    padding-top: 20px;
    color: green;
}

@media(max-width:480px)
{
    flex-direction:column;

    p:nth-child(1)
    {
    font-size: 150px;
    line-height: 150px;
    margin: 0;
    justify-content:center;
    }

    p:nth-child(2)
    {
        text-align: center;
    margin: 0;
    padding: 0;
    line-height: 40px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 20px;
    letter-spacing: 1px;
    }
}
`

export const Button = styled.a`
background: #4bcc4b;
padding: 10px 25px;
margin-top: 20px;
border-radius: 6px;
color: white;
font-weight: 600;
letter-spacing: .6px;
text-decoration: none;
transition:all .5s;

&:hover{
    background:green;
}

@media(max-width:480px)
{
    max-width:300px;
    background:#298f29;
    text-align:center;
    line-height:25px;
}
`

export const Title3 = styled(Title)`
@media(max-width:480px)
{
    color:#f5f5f5;
}
`