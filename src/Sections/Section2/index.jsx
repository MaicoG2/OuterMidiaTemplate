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
                    <p >milhões de pessoas são impactadas diariamente por mensagens instaladas em nossos Outdoors, Empenas, painéis rodoviários, Front Light,  painéis de LED, Mobiliário urbano e projetos especiais,  construindo uma forte relação entre marcas e consumidores.  
                    </p>
                    <p>Nascemos com a missão de ampliar e diversificar, dia a dia, o nosso portfólio de produtos, estando alinhados ao que há de mais inovador quanto às mídias mais requisitadas no mercado publicitário.
                    </p>
                </Description>
            </div>
        </Container2 >
    )
}

export default Section2;