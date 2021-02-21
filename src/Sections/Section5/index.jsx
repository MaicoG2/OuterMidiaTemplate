import React from 'react';

import { Container5, Title, Subtitle, Buttons } from './style'

const Section5 = () => {

    return (
        <Container5 name="contato" style={{ order: 6 }}>
            <Title>Preparado para alavancar seu negócio?</Title>
            <Subtitle>Fale conosco agora mesmo através de qualquer canal de comunicação</Subtitle>
            <Buttons>
                <div class="buttons">
                    <div class="container">
                        <a href="https://twitter.com/masuwa1018" class="btn effect01 green" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="buttons">
                    <div class="container">
                        <a href="https://twitter.com/masuwa1018" class="btn effect01 insta" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="buttons">
                    <div class="container">
                        <a href="https://twitter.com/masuwa1018" class="btn effect01 link" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </Buttons>
        </Container5>
    )
}

export default Section5;