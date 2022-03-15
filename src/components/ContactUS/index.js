import React from "react";
import contactlogo from '../../assets/svgs/contact.svg'
import { Link } from 'react-router-dom';

function ContactUS() {
    return(
        <div className="contact-us-container">
            <div className="contact-us">
                <form className="contact-form">
                    <div className="contact-title">
                        <h5 className="text-white contact-title-text">Contact US</h5>
                    </div>
                    <div className="contact-description">
                        <h2 className="text-white contact-title-text">Get in touch to request a quote or<br/> learn more about our apps</h2>
                    </div>
                    <div className="name-input d-flex flex-row">
                        <input type="text" className="form-control" placeholder="First Name" style={{marginRight: '20px'}} />
                        <input type="text" className="form-control" placeholder="Last Name" style={{marginLeft: '20px'}}/>
                    </div>
                    <div className="name-input d-flex flex-row">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="name-input d-flex flex-row">
                        <input type="text" className="form-control" placeholder="Job Title" style={{marginRight: '20px'}} />
                        <input type="text" className="form-control" placeholder="Phone" style={{marginLeft: '20px'}}/>
                    </div>
                    <div className="name-input d-flex flex-row">
                        <input type="text" className="form-control" placeholder="Company" style={{marginRight: '20px'}} />
                        <input type="text" className="form-control" placeholder="Country" style={{marginLeft: '20px'}}/>
                    </div>
                    <div className="name-input d-flex flex-row">
                        <input type="text" className="form-control" placeholder="Add message" style={{height: '150px'}} />
                    </div>
                    <input type="submit" value="Send" className="btn btn-send mt-5" />
                </form>
                <div className="d-flex flex-row justify-content-center" style={{marginLeft: '100px'}}>
                    <a href='mailto:info@thorapps.com' className="link">info@thorapps.com</a>
                    <p className='divide link'>|</p>
                    <div to='/marketplace' className="link">Tel: +61 403 349 647</div>
                    <p className='divide link' >|</p>
                    <div to='/about' className="link">
                        Adelaide, South Australia<br/>
                        Australia
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS;