import React from 'react';
import './contact-form.styles.scss';

import {ReactComponent as PhoneIcon} from '../../assets/phone.svg';
import {ReactComponent as EmailIcon} from '../../assets/mail-envelope-closed.svg';

const ContactForm = () => (
<div>
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form className='contact-form' id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="form-input">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control-small"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control-small"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-input">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control-big"/>
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-input">
                        <div className="md-form mb-0">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control-big md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="text-center text-md-left">
                <a className="contact-button" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <div className="forms-of-contact">

                <div className="contact-telephone">
                    <PhoneIcon className='contact-icon'/>
                    <p>+ 01 234 567 89</p>
                </div>

                <div className="contact-email">
                    <EmailIcon className='contact-icon'/>
                    <p>contact@mdbootstrap.com</p>
                </div>
            </div>
        </div>
    </div>
</div>

);

export default ContactForm;