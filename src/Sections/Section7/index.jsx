import React from 'react';

import { Container7, Subtitle, Team, Card, Image, Description } from './style'
import { Title, Division } from '../Section2/style'

import Member1 from '../../assets/fundadores/Caio.webp'
import Member2 from '../../assets/fundadores/Mitchell.webp'
import Member3 from '../../assets/fundadores/Victor.webp'

const Section7 = () => {


    return (<Container7 name="time" style={{ order: 5 }}>
            <Title style={{textAlign:'center'}}>Idealizadores</Title>
            <Division>
                <div />
                <div />
                <div />
            </Division>
            <Subtitle>Somos em três pessoas na equipe, cada um contando com uma especialização diferente e nichada para o setor de marketing, afim de termos os melhores resultados possíveis em nossas ações.
            </Subtitle>
            <Team>
                <Card>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member1})` }} />
                    </Image>
                    <Description>
                        <p>Caio Portela</p><br />
                        <p>Gestor de Tráfego e Lançamento</p>
                        <div>
                            <a><i class="fab fa-instagram"></i></a>
                            <a><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
                <Card>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member2})` }} />
                    </Image>
                    <Description>
                        <p>Mitchell Henrique</p><br />
                        <p>Social Media & cowpriter</p>
                        <div>
                            <a><i class="fab fa-instagram"></i></a>
                            <a><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
                <Card style={{ marginRight: '0px' }}>
                    <Image >
                        <div style={{ backgroundImage: `url(${Member3})` }} />
                    </Image>
                    <Description>
                        <p>Victor Marques</p><br />
                        <p>Design e Desenvolvedor</p>
                        <div>
                            <a><i class="fab fa-instagram"></i></a>
                            <a><i class="fab fa-linkedin-in" style={{ marginRight: '0px' }}></i></a>
                        </div>
                    </Description>
                </Card>
            </Team>
        </Container7>
    )
}

export default Section7;