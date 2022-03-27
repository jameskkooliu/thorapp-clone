import React from "react";
import circle from '../../assets/svgs/circle.svg';
import right from '../../assets/svgs/right.svg';

function Quote() {
    return(
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-md-6 contact-us">
                    <form className="contact-form">
                        <div className="contact-title">
                            <img src={circle} alt='circle' width='25px' /> &nbsp;
                            <h5 className="text-white contact-title-text">Get started today! </h5>
                        </div>
                        <div className="contact-description">
                            <h1 className="text-white contact-title-text">Request a quote for our<br/> On-premise apps &nbsp;<img src={right} alt='right' width='20px' /></h1>
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
                        <input type="submit" value="Request Quote" className="btn btn-send mt-5" />
                    </form>
                    <div className="d-flex flex-row mt-5">
                        <a href='mailto:info@thorapps.com' className="link">info@thorapps.com</a>
                        <p className="link">|</p>
                        <div className="link">Tel: +61 403 349 647</div>
                        <p className="link">|</p>
                        <div className="link">
                            Adelaide, South Australia<br/>
                            Australia
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;