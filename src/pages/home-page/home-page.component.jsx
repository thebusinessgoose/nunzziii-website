import React from 'react'
import Header from '../../components/header/header.component';
import './home-page.styles.scss';

import image1 from '../../assets/Nunzziii5.JPG'
import image2 from '../../assets/Nunzziii7.JPG'

import homePageVideo from '../../assets/Nunzziii-movie2.mov';

const HomePage = () => (
    <div className='home-page'>
        <Header />
        <div className='image-gallery'>
            <img className='image-gallery-image' src={image1} alt='image'></img>
            <img className='image-gallery-image' src={image2} alt='image'></img>
        </div>
        <p className='motivational-quote-big'>
            "Each new day is a new opportunity to improve yourself.
            Take it.  And make the most of it."
        </p>
        <div className='homepage-video'>
            <video className='home-page-video' autoPlay muted loop>
                <source src={homePageVideo} type='video/mp4' />
                The video is not supported on your browser.
            </video>
        </div>
            <p className='motivational-quote-small'>
                "Well done is better than well said." - Benjamin Franklin
            </p>
    </div>
)

export default HomePage;