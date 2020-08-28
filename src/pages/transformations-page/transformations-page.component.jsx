import React from 'react';
import './transformations-page.styles.scss';
import tranformationImage from '../../assets/transformation-image.jpg';

const TransformationsPage = () => (
    <div className='transformations-page'>
        <h2 className='transformations-heading'>
            Check out some of the amazing transformations my clients have achieved!
        </h2>
        <div className='testimonial'>
            <img className='testimonial-image' src={tranformationImage} alt='img'></img>
            <div className='testimonial-description'>
                <span className='testimonial-name'>
                    Albus Dumbledore
                </span>
                <span className='testimonial-quote'>
                    "Nunzziii is a Beast!"
                </span>
                <p className='testimonial-summary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className='testimonial-stats'>
                    Before: 22%    After: 13%
                </span>
                <span className='testimonial-stats'>
                    Before: 200lbs    After: 187lbs
                </span>
            </div> 
        </div>
        <div className='testimonial'>
            <img className='testimonial-image' src={tranformationImage} alt='img'></img>
            <div className='testimonial-description'>
                <span className='testimonial-name'>
                    Albus Dumbledore
                </span>
                <span className='testimonial-quote'>
                    "Nunzziii is a Beast!"
                </span>
                <p className='testimonial-summary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className='testimonial-stats'>
                    Before: 22%    After: 13%
                </span>
                <span className='testimonial-stats'>
                    Before: 200lbs    After: 187lbs
                </span>
            </div> 
        </div>
        <div className='testimonial'>
            <img className='testimonial-image' src={tranformationImage} alt='img'></img>
            <div className='testimonial-description'>
                <span className='testimonial-name'>
                    Albus Dumbledore
                </span>
                <span className='testimonial-quote'>
                    "Nunzziii is a Beast!"
                </span>
                <p className='testimonial-summary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className='testimonial-stats'>
                    Before: 22%    After: 13%
                </span>
                <span className='testimonial-stats'>
                    Before: 200lbs    After: 187lbs
                </span>
            </div> 
        </div>
    </div>
)

export default TransformationsPage;