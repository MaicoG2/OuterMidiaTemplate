import React from 'react';

//Styled
import { Container, About, Description2, Sec3, SectionLeft2, SectionLeft3, Section2, Button, Title3, Section33, Description33 } from './style'

import { Title, Division, Section, Description, SectionLeft } from '../Section2/style'

//Image
import Teste from '../../assets/images/teste2.png'
import Teste4 from '../../assets/images/teste4.png'
import Teste5 from '../../assets/images/mobile-2.png'

const Section3 = () => {

    const isMobile = () => {
        if (window.innerWidth >= 480) {
            return <img src={Teste4} alt="outermidia-sobre" />
        }
        else {
            return <img src={Teste5} alt="outermidia-sobre" />
        }
    }
    return (
        <Container name="services" style={{ order: 2 }}>
            <About>
                <SectionLeft3>
                    <img width="100%" src={Teste} alt="outermidia-sobre" />
                </SectionLeft3>
                <Section33 >
                    <Title3 style={{ maxWidth: '350px', lineHeight: '35px', display: 'inline-block' }}>Alavanque a sua geração de leads com Mídia <span >FRONT LIGHT</span>.</Title3>
                    <Division style={{ marginBottom: '30px' }}>
                        <div />
                        <div />
                        <div />
                    </Division>
                    <Description33>
                        <p >Use o Poder de impacto para atrair clientes todos os dias.</p>
                        <p >Nossos painéis premiums em grandes formatos e localizados em pontos estratégicos aumentam o engajamento entre sua empresa e clientes promovendo campanhas de sucesso</p>
                    </Description33>
                    <Button href="#">
                        Seja notado agora pelos seus clientes
                    </Button>
                </Section33>
            </About>
           <About style={{ justifyContent: 'flex-end', marginBottom:'0' }}>
                 <SectionLeft2 style={{ order: 0, alignItems:'flex-start' }}>
                    {isMobile()}
                </SectionLeft2> 
                 <Section2>
                    <Title style={{ maxWidth: '350px', lineHeight: '35px' }}>PRESENÇA NA JORNADA DIÁRIA DE MILHÕES DE CONSUMIDORES</Title>
                    <Division style={{ marginBottom: '30px' }}>
                        <div />
                        <div />
                        <div />
                    </Division>
                    <Description2>
                        <p ><span>84%</span> de penetração entre os brasileiros</p>
                    </Description2>
                    <Description2 style={{ marginTop: '20px' }}>
                        <i className="fas fa-bullhorn" /><p style={{ maxWidth: '250px' }}>Alta afinidade com Millenias e Geração Z: Meio preferido com publicidade à frente do digital</p>
                    </Description2>
                </Section2> 
            </About>
            <About style={window.innerWidth >= 480 ? {marginBottom:'40px'}:{background:'white'}}>
                <div style= {{flexDirection: 'column'}}>
                    <Title style={window.innerWidth >= 480 ? { justifyContent: 'center' }:{display:'none'}}>Alta Frequência e Engajamento</Title>
                    <Division style={window.innerWidth >= 480 ? { marginBottom: '30px' }:{display:'none'}}>
                        <div />
                        <div />
                        <div />
                    </Division>
                    <div style={{ display: 'flex',flexDirection:'column' }}>
                        <Sec3>
                            <p>24</p>
                            <p>horas de exposição dirária</p>
                        </Sec3>
                        
                    </div>
                </div>
            </About>

        </Container >
    )
}

export default Section3;