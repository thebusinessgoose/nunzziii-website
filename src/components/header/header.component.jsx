import React from 'react';
import './header.styles.scss';
import video from '../../assets/Nunzziii-movie3-short.mov';

const Header = () => (
    <div className='header'>
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={video} type='video/mp4' />
                The video is not supported on your browser.
            </video>
        </div>
        <div className='headings'>
            <h1 className='heading-main'>
                Nunzziii
            </h1>
            
        </div>
        <h3 className='tagline'>
            If you're not excited, get excited!!
        </h3>
    </div>
)

export default Header;