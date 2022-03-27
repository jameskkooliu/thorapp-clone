import React from "react";

function ServiceContact() {
    return(
        <div className="container">
            <div className="row pt-5 justify-content-center">
                <div className="col-md-6 contact-us">
                    <form className="contact-form">
                        <div className="contact-title">
                            <h5 className="text-white contact-title-text">Get started today! No credit card required.</h5>
                        </div>
                        <div className="contact-description">
                            <h2 className="text-white contact-title-text">Request your 30-day trial and get $50 credit to test BI Service in your own SharePoint environment</h2>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" placeholder="First Name" style={{marginRight: '20px'}} required />
                            <input type="text" className="form-control" placeholder="Last Name" style={{marginLeft: '20px'}} required/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" placeholder="Job Title" style={{marginRight: '20px'}} required />
                            <input type="text" className="form-control" placeholder="Phone" style={{marginLeft: '20px'}} required />
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" placeholder="Company" style={{marginRight: '20px'}} required />
                            <input type="text" className="form-control" placeholder="Country" style={{marginLeft: '20px'}} required/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" placeholder="Add message" style={{height: '150px'}} required/>
                        </div>
                        <input type="submit" value="Send" className="btn btn-send mt-5" />
                    </form>
                    <div className="d-flex mt-5">
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

export default ServiceContact;