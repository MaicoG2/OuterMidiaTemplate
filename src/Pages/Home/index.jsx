import React, { useState, useEffect, lazy, Suspense } from 'react';

//styled
import { Global, Default, Loader, Footer } from './style'

//loader
import LogoLight from '../../assets/images/loader.png'

//evo
import logoEvo from '../../assets/images/logo-evo.png'

//Components
const Header = lazy(() => import('../../Sections/Header'))
const Section1 = lazy(() => import('../../Sections/Section1'))
const Section2 = lazy(() => import('../../Sections/Section2'))
const Section3 = lazy(() => import('../../Sections/Section3'))
const Section4 = lazy(() => import('../../Sections/Section4'))
const Section5 = lazy(() => import('../../Sections/Section5'))
const Section6 = lazy(() => import('../../Sections/Section6'))
const Section7 = lazy(() => import('../../Sections/Section7'))
const Section8 = lazy(() => import('../../Sections/Section8'))



const Home = () => {

    const [changeHeader, setHeader] = useState(false)
    const [animation, setAnimation] = useState(false)

    //Scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = (event) => {
        let bodyRect = document.body.getBoundingClientRect();
        let top = (bodyRect.top) * (-1);
        let height = event.path[1].innerHeight

        if (top >= height - 150) {
            setHeader(true)
            setAnimation(true)

        }
        else {
            setHeader(false)
        }
    }

    return (
        <>
            <Suspense fallback={
                <Loader>
                    <div className="pai-loader">
                        <div className="flex-center white-loading">
                            <img src={LogoLight} alt="outermidia-logo-loader" />
                            <span className="animated-background"></span>
                        </div>
                    </div>
                </Loader>}>
                <Global />
                <Default >
                   <Header change={changeHeader} />
                    <Section1 />
                    <Section2 animation={animation} />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Footer>
                        <a href="https://www.google.com/maps/dir//outermidia/@-27.5936325,-48.5268682,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x952739d8599461cd:0xdb941c301d74e55f!2m2!1d-48.5269439!2d-27.5836986">
                            Rua Claude Barnard 2 - Trindade, Florianópolis - SC, 88036-045
                        </a>
                        <a href="https://agenciaevoup.com.br/">
                        <i class="fas fa-code"></i>
                        Site desenvolvido por<img src={logoEvo} height="30px"/>
                        </a>
                    </Footer>
                </Default>
            </Suspense>
        </>
    )
}

export default Home;