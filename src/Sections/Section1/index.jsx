import React from 'react';

//styled
import { Container, Title, Button, Logo, Video, DropDown } from './style'

//Scroll    
import { Link } from 'react-scroll'

//logo
import LogoLight from '../../assets/images/logo_light.png'
import Mobile from '../../assets/images/Mobile-1.png'

const Section1 = () => {

    return (
        <Container name="section1" style={{ order: 0 }}>
            <Video>
                <div className="video-foreground">
                    <iframe src={"https://www.youtube.com/embed/idp3JiFJxD4?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=idp3JiFJxD4&showinfo=0"} frameborder="0" title="outer-apresentacao" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                <img src={Mobile} alt=""/>
                    </div>
                <div className="background" />
            </Video>
            <Logo>
                <img src={LogoLight} alt="logo-outer"  height="auto"/>
            </Logo>
            <Title>
                <h1>
                    <p>O Out of Home vai surpreender sua marca e transformar seus resultados em vendas imediatas</p>
                </h1>
            </Title>
            <div style={window.innerWidth <= 480 ? { display: 'flex', flexDirection: 'column' } : {  }}>
                <Button style={window.innerWidth <= 480 ? { marginRight: '0px' } : { marginRight: '25px' }}>
                    <Link to="section2" spy={true} smooth={true} duration={800}>Entenda</Link>
                </Button>
                <DropDown >
                    <Button style={window.innerWidth <= 480 ? { marginTop:'20px' } : { width: '200px' }}>Fale com a gente!</Button>
                    <div class="dropdown-content">
                        <a href="mailto:atendimento@outermidia.com.br">
                        <i class="fas fa-envelope" style={{color:'orange'}}></i>Email Comercial</a>
                        {/* <a href="#"><i class="fab fa-telegram-plane" style={{color:' #0088cc'}}></i>Telegram</a> */}
                    </div>
                </DropDown>
            </div>
        </Container>
    )
}

export default Section1;