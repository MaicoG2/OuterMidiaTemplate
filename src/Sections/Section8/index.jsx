import React from 'react'

import { About, Button } from '../Section3/style'
import { Container8, Title8, Division8, Description8 } from './style'
import { Division, Section, SectionLeft } from '../Section2/style'

import Teste from '../../assets/images/bikepoint.jpg'
import Evo from '../../assets/images/pp.jpg'

const Section8 = () => {
    return (
        <Container8 name="parcerias" style={{ order: 5 }}>
            <Title8>Trabalhamos com grandes parceiros para evoluir seu negócio ao máximo</Title8>
            <Division>
                <div />
                <div />
                <div />
            </Division>
            <About style={window.innerWidth >= 480 ? { margin: '50px 0 100px 0'}:{margin:'50px 0', padding:'0'}}>
                <SectionLeft style={{ order: 0, flex: 1 }}>
                    <img width={window.innerWidth >= 480 ? "100%":"100%"} src={Teste} alt="outermidia-sobre" />
                </SectionLeft>
                <Section style={window.innerWidth >= 480 ? { alignItems: 'flex-start', marginLeft: '100px', flex:'0.5' } : { alignItems: 'flex-start', width: '100%', marginTop: '20px' }}>
                    <Title8><span >Bike Point SC</span>.</Title8>
                    <Division8 >
                        <div />
                        <div />
                        <div />
                    </Division8>
                    <Description8>
                        <p >Use o Poder de impacto para atrair clientes novos todos os dias.
                        </p>
                        <p>Nossos painéis premiums em grandes formatos e localizados em pontos estratégicos aumentam o engajamento de sua empresa com seus clientes para promover campanhas de sucesso
                        </p>
                    </Description8>
                    <Button href="#">
                        Seja notado agora pelos seus clientes
                    </Button>
                </Section>
            </About>
        </Container8>
    )
}

export default Section8;