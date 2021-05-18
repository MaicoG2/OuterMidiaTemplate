import React from 'react';

import { Container7, Subtitle, Team, Card, Image, Description } from './style'
import { Title, Division } from '../Section2/style'

import Member1 from '../../assets/fundadores/pablo.png'
import Member2 from '../../assets/fundadores/Fred.png'
import Member3 from '../../assets/fundadores/andreia.jpg'

const Section7 = () => {


    return (<Container7 name="time" style={{ order: 5 }}>
            <Title style={{textAlign:'center'}}>Idealizadores</Title>
            <Division>
                <div />
                <div />
                <div />
            </Division>
            <Subtitle>Somos a Outermidia entregamos  com excelência, agilidade e gerenciamos todo o processo que envolve a veiculação de  midia OOH da produção ao checking fotográfico.
            </Subtitle>
            <Team>
                <Card>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member1})` }} />
                    </Image>
                    <Description>
                        <p>Pablo Lopes</p><br />
                        <p>CEO</p>
                        <div>
                            <a href="https://www.linkedin.com/in/pablosilveiralopes/"><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member2})` }} />
                    </Image>
                    <Description>
                        <p>Frederico Juliano</p><br />
                        <p>GESTOR COMERCIAL</p>
                        <div>
                            <a href="https://www.linkedin.com/in/frederico-juliano/"><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member3})` }} />
                    </Image>
                    <Description>
                        <p>Andreia Pinheiro</p><br />
                        <p>CONSULTORA INTERNA</p>
                        <div>
                            <a href="https://www.linkedin.com/in/andr%C3%A9ia-pinheiro-45900b104/"><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
                
            </Team>
        </Container7>
    )
}

export default Section7;