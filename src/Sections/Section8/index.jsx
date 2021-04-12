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
                        <p >Somos uma equipe criativa  que trabalha na interseção do urbanismo e da comunicação.
                        </p>
                        <p>Acreditamos que contar histórias é mais crucial do que nunca para lugares significativos. 

É por isso que combinamos percepções inovadoras sobre mídia out of home com uma forte experiência em branding, e criação de conteúdo.
                        </p>
                    </Description8>
                    <Button href="https://api.whatsapp.com/send?phone=5548984683976&text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20meu%20neg%C3%B3cio">
                        Conheça mais sobre a Bike Point
                    </Button>
                </Section>
            </About>
        </Container8>
    )
}

export default Section8;