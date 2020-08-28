import React from 'react'
import Header from '../../components/header/header.component';
import './home-page.styles.scss';
import video from '../../assets/Nunzziii-movie3-short.mov';

import image1 from '../../assets/Nunzziii5.JPG'
import image2 from '../../assets/Nunzziii7.JPG'

import homePageVideo from '../../assets/Nunzziii-movie2.mov';

const HomePage = () => (
    <div className='homepage'>
        <div className='homepage-video'>
            <video className='homepage-video__content' autoPlay muted loop>
                <source src={video} type='video/mp4' />
                The video is not supported on your browser.
            </video>
        </div>
        <h1 className='homepage-heading'>
            Nunzziii
        </h1>
        <div className='underline'></div>
        <h3 className='tagline'>
            If you're not excited, get excited!!
        </h3>
        <div className='homepage-gallery'>
            <img className='gallery-image' src={image1} alt='image'></img>
            <img className='gallery-image' src={image2} alt='image'></img>
        </div>
    </div>
)

export default HomePage;