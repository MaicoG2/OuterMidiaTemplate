import React, { useState } from 'react';

//styled
import { Container, Nav, Logo, Zap, Number, MenuHb } from './style'

//images
import LogoHeader from '../../assets/images/loader.png'

//Scroll
import { Link } from 'react-scroll'

const Header = ({ change }) => {
    const [hidde, setHidden] = useState(true);
    return (
        <>
            <Container change={change}>
                <Logo>
                    <img src={LogoHeader} alt="logo-header-outermidia" height="25px" />
                </Logo>
                <Nav change={change} onClick={() => setHidden(!hidde)} hidde={hidde}>
                    <ul>
                        <li>
                            <Link to="section1" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Home</Link>
                        </li>
                        <li>
                            <Link to="section2" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Sobre</Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Produtos</Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Portfólio</Link>
                        </li>
                        <li>
                            <Link to="parcerias" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Bike Point</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={800} onClick={() => setHidden(!hidde)}>Contato</Link>
                        </li>
                    </ul>
                </Nav>
                <Number>
                    <p>Fale Conosco</p>
                    <p>0800 033 0324</p>
                </Number>
                <MenuHb onClick={() => setHidden(!hidde)}>
                    <i className="fas fa-bars"></i>
                </MenuHb>
            </Container>
            <Zap>
                <button class="cta">
                    <i class="fab fa-whatsapp"></i>
                    <a href="/whatsapp" class="button-text">Fale Conosco</a>
                </button>
            </Zap>
        </>
    )
}

export default Header;
