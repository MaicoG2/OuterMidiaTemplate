import React from 'react';

//styled
import { Container2, Title, Division, Description } from './style'


const Section2 = ({ animation }) => {
    return (
        <Container2 animation={animation} name="section2" style={{order:1}}>
            <div className="section2">
                <Title>Nesse exato momento</Title>
                <Division >
                    <div />
                    <div />
                    <div />
                </Division>
                <Description>
                    <p >milhões de
                    pessoas são impactadas
                    por mensagens instaladas em
                    nossas Plataformas Out Of Home
                    construindo uma forte relação
                    entre marcas e públicos .
                    </p>
                    <p>Nossa operação de OOH e Live
                    Marketing busca constantemente
                    integrar tecnologias, manter-se
                    atualizada e acima de tudo
                    acompanhar as mudanças do
                    Mercado de mídia Global.
                    </p>
                </Description>
            </div>
        </Container2 >
    )
}

export default Section2;