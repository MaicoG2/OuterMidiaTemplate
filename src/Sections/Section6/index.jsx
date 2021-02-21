import React from 'react';

//Styled
import { Container6, Section2, Line, Card } from './style'



const Section6 = () => {
    return (
        <Container6 name="services">
            <Section2>
                <Line>
                    <Card>
                        <i class="fas fa-ad" style={{color:'#aa377e'}}></i>
                        <div>
                            <p>Exposição Garantida</p>
                            <p>Seu cliente terá acesso sem quaisquer interrupção ao seu anúncio como ad-blocker ou skip ad.</p>
                        </div>
                    </Card>
                    <Card>
                        <i class="fas fa-copyright" style={{color:'#da0c45'}}></i>
                        <div>
                            <p>Comunicação Limpa</p>
                            <p>Contamos com estrátégias de <span style={{fontWeight:'800',color:'green',textTransform:'uppercase'}}>brand safety e bot free</span> para trabalhar na segurança de sua marca.</p>
                        </div>
                    </Card>
                    <Card style={{ marginRight: '0px' }}>
                    <i class="fab fa-searchengin" style={{color:'#e47625'}}></i>
                        <div>
                            <p>Incremento na Busca</p>
                            <p>Quando combinado o OOH com estratégias digitais, obtem-se um <span style={{fontWeight:'800',color:'green',textTransform:'uppercase'}}>incremento de 80%</span> na busca por produtos ou marcas.</p>
                        </div>
                    </Card>
                </Line>
                <Line>
                    <Card>
                    <i class="fas fa-hashtag" style={{color:'#0f89c2'}}></i>
                        <div>
                            <p>Engajamento</p>
                            <p><span style={{fontWeight:'800',color:'green',textTransform:'uppercase'}}>62% de interação com anúncio através de smartphone </span>, sendo 40% via QR Code e 25% por código promocional.</p>
                        </div>
                    </Card>
                    <Card>
                    <i class="fas fa-chart-line"  style={{color:'#093e8c'}}></i>
                        <div>
                            <p>Conversão Imediata</p>
                            <p><span style={{fontWeight:'800',color:'green',textTransform:'uppercase'}}>92% dos leads engajados </span>com o anúncio via OOH realizaram uma compra durante a visita ao anuncio.</p>
                        </div>
                    </Card>
                    <Card style={{ marginRight: '0px' }}>
                    <i class="fas fa-hands-helping"  style={{color:'#763482',marginRight:'20px'}}></i>
                        <div>
                            <p>Customer Success</p>
                            <p>Contamos com apoio integral a nosso cliente para lhe entregar o que há de melhor em nossos produtos, para agregar ao máximo sua marca ao mercado.</p>
                        </div>
                    </Card>
                </Line>
            </Section2>
        </Container6>
    )
}

export default Section6;