import React, { useState } from 'react';

//Styled
import { Container2, Section1, Gallery,Countdown,Info } from './style'
import { Title, Division } from '../Section2/style'

//Images
import BK1 from '../../assets/images/bk1.png'
import bk2 from '../../assets/images/bk2.png'
import bk3 from '../../assets/images/bk3.png'
import bk4 from '../../assets/images/bk4.png'
import bk5 from '../../assets/images/t1.jpg'
import bk6 from '../../assets/images/t2.jpg'
import bk7 from '../../assets/images/t3.jpg'
import bk8 from '../../assets/images/t4.jpg'

//Slideshow
// import Slideshow from '../../assets/Components/Slideshow'

const Section4 = () => {

    const [nameClass1,setClass1] = useState(false)
    const [nameClass2,setClass2] = useState(false)
    const [nameClass3,setClass3] = useState(false)
    const [nameClass4,setClass4] = useState(false)

    const changeFoto = (event) => {
        setClass1(!nameClass1)
    }
    const changeFoto2 = (event) => {
        setClass2(!nameClass2)
    }
    const changeFoto3 = (event) => {
        setClass3(!nameClass3)
    }
    const changeFoto4 = (event) => {
        setClass4(!nameClass4)
    }

    return (
        <Container2 name="portfolio" style={{order:4}}>
            <Countdown>
                <Info>
                    <p>Faces Publicitárias</p>
                    <div>
                    <i className="fas fa-bullhorn"></i>
                        <p>+1.000</p>
                    </div>
                </Info>
                <Info>
                    <p>Clientes</p>
                    <div>
                    <i className="fas fa-users"></i>
                        <p>3,800</p>
                    </div>
                </Info>
                <Info>
                    <p>Espaços Publicitários no Sul</p>
                    <div>
                    <i className="fas fa-eye"></i>
                        <p>+ 500</p>
                    </div>
                </Info>
                <Info>
                    <p>Campanhas Atendidas</p>
                    <div>
                    <i className="fas fa-globe-asia"></i>
                        <p>+2000</p>
                    </div>
                </Info>
            </Countdown>
          <Section1>
                <Title>Veja alguns de nossos produtos</Title>
                <Division>
                    <div />
                    <div />
                    <div />
                </Division>
            </Section1>
            <Gallery>
                <figure onClick={changeFoto} className={nameClass1 ? "expanded":""}>
                    <img src={BK1} alt="Mercedez" />
                    <figcaption>Mercedez</figcaption>
                </figure>
                <figure onClick={changeFoto2} className={nameClass2 ? "expanded":""}>
                    <img src={bk2} alt="" />
                    <figcaption>Liderança</figcaption>
                </figure>
                <figure onClick={changeFoto3} className={nameClass3 ? "expanded":""}>
                    <img src={bk3} alt />
                    <figcaption>Idelli</figcaption>
                </figure>
                <figure onClick={changeFoto4} className={nameClass4 ? "expanded":""}>
                    <img src={bk4} alt />
                    <figcaption>Feevale</figcaption>
                </figure>
                <figure>
                    <img src={bk5} alt />
                    <figcaption>Feevale</figcaption>
                </figure>
                <figure>
                    <img src={bk6} alt />
                    <figcaption>Feevale</figcaption>
                </figure>
                <figure>
                    <img src={bk7} alt />
                    <figcaption>Feevale</figcaption>
                </figure>
                <figure>
                    <img src={bk8} alt />
                    <figcaption>Feevale</figcaption>
                </figure>
            </Gallery>
            {/* <Section1>
            <Title style={{marginTop:'100px',textAlign:'center'}}>Confira alguns dos clientes que confiam em nosso trabalho</Title>
                <Division>
                    <div />
                    <div />
                    <div />
                </Division>
            </Section1> */}
        </Container2>
    )
}

export default Section4;