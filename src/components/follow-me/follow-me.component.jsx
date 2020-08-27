import React from 'react';
import './follow-me.styles.scss';
import {Link} from 'react-router-dom';

import {ReactComponent as FacebookIcon} from '../../assets/facebook.svg';
import {ReactComponent as InstagramIcon} from '../../assets/instagram.svg';
import {ReactComponent as TikTokIcon} from '../../assets/tiktok.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/youtube.svg';

import Dropdown from 'react-bootstrap/Dropdown';

const FollowMe = () => (

    <div class="follow-me-dropdown">
        <div class="dropbtn">
            Follow Me
            <div className='arrow'>&#8964;</div>
        </div>
        
        <div class="dropdown-content">
            <a className='dropdown-item' href="https://www.facebook.com/nunzziii">
                <FacebookIcon className='icon'/>
                Facebook
            </a>
            <a className='dropdown-item' href="https://www.instagram.com/nunzziii/">
                <InstagramIcon className='icon' />
                Instagram
            </a>
            <a className='dropdown-item' href="https://www.tiktok.com/@nunzziiii?source=h5_m">
                <TikTokIcon className='icon' />
                Tik Tok
            </a>
            <a className='dropdown-item' href="https://www.youtube.com/nunzziii">
                <YoutubeIcon className='icon' />
                Youtube
            </a>
        </div>
    </div>
)

export default FollowMe;