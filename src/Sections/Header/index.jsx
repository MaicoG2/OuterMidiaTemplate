import React from 'react';

//styled
import { Container, Nav, Logo, Zap } from './style'

//images
import LogoHeader from '../../assets/images/loader.png'

//Scroll
import { Link } from 'react-scroll'

const Header = ({ change }) => {
    return (
        <>
            <Container change={change}>
                <Logo>
                    <img src={LogoHeader} alt="logo-header-outermidia" height="25px" />
                </Logo>
                <Nav change={change}>
                    <ul>
                        <li>
                            <Link to="section1" spy={true} smooth={true} duration={800}>Home</Link>
                        </li>
                        <li>
                            <Link to="section2" spy={true} smooth={true} duration={800}>Sobre</Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} duration={800}>Produtos</Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true} duration={800}>Portfólio</Link>
                        </li>
                        <li>
                            <Link to="parcerias" spy={true} smooth={true} duration={800}>Bike Point</Link>
                        </li>
                        <li>
                            <Link to="time" spy={true} smooth={true} duration={800}>Equipe</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={800}>Contato</Link>
                        </li>
                    </ul>
                </Nav>
            </Container>
            <Zap>
                <button class="cta">
                    <i class="fab fa-whatsapp"></i>
                    <a href="https://api.whatsapp.com/send?phone=554891320921&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio" class="button-text">Fale Conosco</a>
                </button>
            </Zap>
        </>
    )
}

export default Header;