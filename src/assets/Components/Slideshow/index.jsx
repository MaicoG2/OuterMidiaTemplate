import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Image1 from '../../background/Section1.jpg'
import Image2 from '../../background/Section2.webp'

const Slideshow = () => {
    return (
        <div className="slide-container" style={{ border: 'solid 1px red' }}>
            <Slide>
                <div className="each-slide">
                    <div>
                    </div>
                </div>
                <div className="each-slide">
                    <div >
                        <img ></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img></img>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;