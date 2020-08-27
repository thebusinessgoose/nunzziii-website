import React from 'react';
import './training-programs.styles.scss';
import trainingProgramsImage from '../../assets/Nunzziii15.JPG';
import trainingVideo from '../../assets/Nunzziii-movie3.mov';
import shredProgramImage from '../../assets/Nunzziii1.JPG';
import bulkProgramImage from '../../assets/Nunzziii10.JPG';
import bootyProgramImage from '../../assets/Nunzziii16.JPG';
import TRAINING_PROGRAM_DATA from './training-programs.data';
import ShopItem from '../../components/shop-item/shop-item.component';


class TrainingPrograms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: TRAINING_PROGRAM_DATA
        }
    }

    render() {
        return (
            <div className='page'>
                <h2 className='page-heading'>
                    Training Programs
                </h2>
                <div className='page-body'>
                    <p className='page-description'>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat.
                    </p>
                    {/* <img className='training-programs-image' src={trainingProgramsImage} alt='img'></img> */}
                    
                    <video className='training-video' autoPlay muted loop>
                        <source src={trainingVideo} type='video/mp4' />
                        The video is not supported on your browser.
                    </video>
                </div>
                <div className='training-programs'>

                    {TRAINING_PROGRAM_DATA.map((item) => (
                        <ShopItem key = {item.id} item={item} />
                    ))}


                    {/* <div className='training-program'>
                        <p className='program-title'>
                            12 Week Shred
                        </p>
                        <img className='program-image' src={shredProgramImage} alt='image' />
                        <div className='program-details'>
                            <span className='program-price'>$59.99</span>
                            <a className='learn-more'>Learn More</a>
                        </div>
                    </div>
                    <div className='training-program'>
                        <p className='program-title'>
                            12 Week Bulk
                        </p>
                        <img className='program-image' src={bulkProgramImage} alt='image' />
                        <div className='program-details'>
                            <span className='program-price'>$59.99</span>
                            <a className='learn-more'>Learn More</a>
                        </div>
                    </div>
                    <div className='training-program'>
                        <p className='program-title'>
                            12 Week Booty Builder
                        </p>
                        <img className='program-image' src={bootyProgramImage} alt='image' />
                        <div className='program-details'>
                            <span className='program-price'>$59.99</span>
                            <a className='learn-more'>Learn More</a>
                        </div>
                    </div> */}


                </div>
            </div>
        )
    }
}

export default TrainingPrograms;