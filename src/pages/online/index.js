import React from 'react'
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import pic1 from '../../assets/images/Computer with Graph.webp';
import pic2 from '../../assets/images/Business Meeting.webp';
import pic3 from '../../assets/images/helloquence-5fNmWej4tAA-unsplash.webp';
import pic4 from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp';
import GoldCoast from '../../assets/images/GoldCoast_edited.png';
import HAMBS from '../../assets/images/HAMBS_edited.png';
import Electranet from '../../assets/images/Electranet-1_edited.png';
import DHS from '../../assets/images/DHS_edited_edited.png';
import Bupa from '../../assets/images/Bupa_edited.png';

import sharedPoint from '../../assets/svgs/sharedPoint.svg'
import microsoft from '../../assets/svgs/microsoft.svg'
import message from '../../assets/svgs/message.svg'

import ContactUS from '../../components/ContactUS';

function Online() {
    return (
        <div className='main'>
            <div className='online-container mb-5'>
                <img src={mainBack} alt="Not Found" className='main-back' />
                <div className='centered'>
                    <p className='title online-title'>CONNECTING PEOPLE TO DATA</p>
                    <h4>
                        <span>We streamline the way insight-driven companies experience SharePoint and
                        other Microsoft products
                        </span>
                    </h4>
                </div>
            </div>
            <div className='container'>
                <div className='row showcase'>
                    <div className='col-md-3 showcase-item'>
                        <div className='container'>
                            <div className='image-container d-flex justify-content-center'>
                                <button className='bottom btn btn-primary'>BI SERVICE</button>
                                <img src={pic1} width='120%' alt='' className='mb-4'></img>
                            </div>
                            <div className='text-center'>
                                <span className='contet-title'>Real-time collaboration for BI reports in SharePoint Online</span>
                            </div>
                            <div>
                                <p className='text-center content-description'>
                                Get immediate access to your data from different sources
                                using SQL Server Reporting in a format that works for you.
                                Create, export and schedule stunning dashboards and get
                                actionable insights at your fingertips. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 showcase-item'>
                        <div className='container'>
                            <div className='image-container d-flex justify-content-center'>
                                <button className='bottom btn btn-primary'>BI SERVICE</button>
                                <img src={pic2} width='120%' alt='' className='mb-4'></img>
                            </div>
                            <div className='text-center'>
                                <span className='contet-title'>Replicate your list items to SQL in real-time in SharePoint Online</span>
                            </div>
                            <div>
                                <p className='text-center content-description'>
                                Gain immediate access to all of your SharePoint lists in one place.
                  With data collated and stored in SQL, you'll be running reports
                  in a fraction of the time. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 showcase-item'>
                        <div className='container'>
                            <div className='image-container d-flex justify-content-center'>
                                <button className='bottom btn btn-primary'>BI SERVICE</button>
                                <img src={pic3} width='120%' alt='' className='mb-4'></img>
                            </div>
                            <div className='text-center'>
                                <span className='contet-title'>Access all your entities across Project Online</span>
                            </div>
                            <div>
                                <p className='text-center content-description'>
                                Compile a complete picture of your project
                  replicating project entities into SQL database
                  in just a fraction of the time. Be ready
                  for your next meeting, armed with immediate access
                  to accurate data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='online-content online-second-part'>
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center container">
                                <div className="online-second-part-item1">
                                <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                                </div>
                                <div className="online-second-part-item2 text-white first-item">
                                <h2 className='text-center'>“ThorApps products have consistently delighted our customers; 
                                    simplicity in design, installation, and configuration belies 
                                    the powerful nature of the apps and their overwhelming positive 
                                    impact for the business.”</h2>
                                </div>
                                <div className="online-second-part-item3 text-white">
                                    <p className='text-center'>Simon Newton | Parker-Newton</p>
                                </div>
                                <div className="capteria">
                                <img src={pic4}  alt="Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center container">
                                <div className="online-second-part-item1">
                                <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                                </div>
                                <div className="online-second-part-item2 text-white second-item">
                                <h2 className='text-center'>“Reflex Reporting from ThorApps has enabled us to provide our customers with reliable and fast reports in a fraction of the time it used to take.”</h2>
                                </div>
                                <div className="online-second-part-item3 text-white">
                                    <p className='text-center'>Laith Adel | EPM Partners</p>
                                </div>
                                <div className="capteria">
                                    <img src={pic4} alt="Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center container">
                                <div className="online-second-part-item1">
                                <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                                </div>
                                <div className="online-second-part-item2 text-white third-item">
                                <h2 className='text-center'>"Easy to use. Top customer support.Improving quickly."</h2>
                                </div>
                                <div className="online-second-part-item3 text-white">
                                    <p className='text-center'>Ali Sabouri | IMPAQ International, LLC</p>
                                </div>
                                <div className="capteria">
                                <img src={pic4} alt="Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center container">
                                <div className="online-second-part-item1">
                                <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                                </div>
                                <div className="online-second-part-item2 text-white fifth-item">
                                <h2 className='text-center'>"Great App! Easy to use super user friendly for admins."</h2>
                                </div>
                                <div className="online-second-part-item3 text-white">
                                    <p className='text-center'>Mariano M. | Boston Scientific</p>
                                </div>
                                <div className="capteria">
                                    <img src={pic4}  alt="Not Found" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
            <div className='companies d-flex flex-row justify-content-between my-5'>
                <div className='company'>
                    <a href='https://www.goldcoast.qld.gov.au/Home' className='logo-company' target="_blank">
                        <img src={GoldCoast} alt='Not Found'/>
                    </a>
                </div>
                <div className='company'>
                    <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                        <img src={Electranet} alt='Not Found'/>
                    </a>
                </div>
                <div className='company'>
                    <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                        <img src={Bupa} alt='Not Found'/>
                    </a>
                </div>
                <div className='company'>
                    <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                        <img src={DHS} alt='Not Found'/>
                    </a>
                </div>
                <div className='company'>
                    <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                        <img src={HAMBS} alt='Not Found'/>
                    </a>
                </div>
            </div>
            <div className='introduction d-flex flex-row justify-content-center'>
                <div className='intro-item text-center mx-3'>
                    <img src={sharedPoint} alt="not found" className='itro-svg' />
                    <div className='intro-title'><p>SharePoint<br/>Expert</p></div>
                    <div className='intro-description'><p>More than 200,000 organizations and 190 million people are using SharePoint to share and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization.</p></div>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
                <div className='intro-item text-center mx-3'>
                    <img src={microsoft} alt="not found" className='itro-svg' />
                    <div className='intro-title'><p>Microsoft<br/>Certified</p></div>
                    <div className='intro-description'><p>By being a Certified Microsoft Partner we have access to the latest training, resources and dedicated support. This means we are always up-to-date on the latest features, releases and early product information to provide our clients a robust, seamless SharePoint experience.</p></div>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
                <div className='intro-item text-center mx-3'>
                    <img src={message} alt="not found" className='itro-svg' />
                    <div className='intro-title'><p>Reliable<br/>Partners</p></div>
                    <div className='intro-description'><p>We are proud to partner with BGI Solutions, an Australian company that masters our tools to deliver best-in-class service to our clients worldwide. Their agile team of IT specialists is ready to assist you with the configuration and implementation of our apps.</p></div>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
            <ContactUS />
        </div>
    )
}

export default Online;