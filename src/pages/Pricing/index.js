import React from "react";
import { useNavigate } from "react-router-dom";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import card from '../../assets/svgs/card.svg'
import benefit from '../../assets/svgs/benefit.svg'
import clock from '../../assets/svgs/clock.svg'
import free from '../../assets/svgs/free.svg'
import environment from '../../assets/svgs/environment.svg'
import handshake from '../../assets/svgs/handshake.svg'
import tableMeeting from '../../assets/images/c1a65d_c16c0544d5b1428b9d902bb575ceff04_mv2_d_4000_2667_s_4_2 (1).webp'

function Pricing() {

    const navigate = useNavigate();

    const redirectToRequestQuote = () => {
        navigate('/on-premise');
    }

    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <h4>ONLINE APPS</h4>
                    <p className='title online-title'>CONNECTING PEOPLE TO DATA</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>
                    <h4>We streamline the way insight-driven companies experience SharePoint and
                        other Microsoft products
                    </h4>
                </div>
            </div>
            <div className="container my-5 text-center">
                <div className="description">
                    <h4>Create your ThorApps account today and get a $50-plan for free, valid for 30 days. Try out a single product, or trial the full suite of powerful apps to boost your data experience in SharePoint Online.</h4>
                </div>
                <button className="btn calc-price">LEARN HOW WE CALCULATE THE PRICE</button>
            </div>
            <div className="pricing-cards">
            <div className="container">
                <div className="row justify-content-between pt-5 pb-5">
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={card} alt='card' className="card-size" />
                        <h6 className="card-text">GET STARTED WITHOUT CREDIT CARD</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={benefit} alt='card' className="card-size" />
                        <h6 className="card-text">BENEFIT FROM ALL FEATURES, REGARDLESS OF THE PLAN YOU CHOOSE</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={clock} alt='card' className="card-size" />
                        <h6 className="card-text">NO CONTRACT*: CANCEL, DOWNGRADE OR UPGRADE ANYTIME YOU NEED</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={free} alt='card' className="card-size" />
                        <h6 className="card-text">FREE UPDATES INCLUDED</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={environment} alt='card' className="card-size" />
                        <h6 className="card-text">UNLIMITED USERS AND ENVIRONMENTS</h6>
                    </div>
                </div>
                <div  className="text-center pb-5">
                    <span  className="text-white">*Annual subscriptions excluded.</span>
                </div>
            </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center mt-5 used-by">USED BY<br/> 68% OF CLIENTS</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-2 col-xs-12 text-center">
                        <h5 className="element text-center">TRIAL</h5>
                        <div className="free element price-number">Free</div>
                        <span className="element text-center">Valid for 30 days</span>
                        <div className="element get-free">GET $50 FOR FREE</div>
                        <div className="element text-bold">Unlimited Users</div>
                        <button className="btn btn-success">Get Started</button>
                        <div className="p-4">Best plan to test your data consumption</div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-success">Get Started</button>
                        <div className="p-4">Best plan to test your data consumption</div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-success">Get Started</button>
                        <div className="check-item">✓</div>
                    </div>
                    <div className="col-md-2 col-xs-12 text-center">
                        <h5 className="element text-center">SOLO</h5>
                        <div className="price element price-number">$ 100</div>
                        <span className="element">Valid for 30 days</span>
                        <div className="element get-price ">GET $50 FOR FREE</div>
                        <div className="element text-bold">Unlimited Users</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to execute approx.<br/> <b>5,200 reports</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to sync approx.<br/> <b>+177,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="check-item">✓</div>
                    </div>
                    <div className="col-md-2 col-xs-12 text-center">
                        <h5 className="element text-center">TEAM</h5>
                        <div className="price element price-number">$ 100</div>
                        <span className="element">Valid for 30 days</span>
                        <div className="element get-price">GET $50 FOR FREE</div>
                        <div className="element text-bold">Unlimited Users</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to sync approx.<br/> <b>37,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to sync approx.<br/> <b>37,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="check-item">✓</div>
                    </div>
                    <div className="col-md-2 col-xs-12 text-center">
                        <h5 className="element text-center">BUSINESS</h5>
                        <div className="price element price-number">$ 100</div>
                        <span className="element">Valid for 30 days</span>
                        <div className="element get-price">GET $50 FOR FREE</div>
                        <div className="element text-bold">Unlimited Users</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to execute approx.<br/><b> 82,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="p-4">Best plan to sync approx.<br/> <b>82,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-start">Get Started</button>
                        <div className="check-item">✓</div>
                    </div>
                    <div className="col-md-2 col-xs-12 text-center">
                        <h5 className="element text-center">ENTERPRISE</h5>
                        <div className="price element">
                            <img src={handshake} alt='handshake' className="handshake" />
                        </div>
                        <span className="element">Valid for 30 days</span>
                        <div className="element get-price">GET $50 FOR FREE</div>
                        <div className="element text-bold">Unlimited Users</div>
                        <button className="btn btn-contact">Contatc Us</button>
                        <div className="p-4">Best plan to execute approx.<br/> <b>+177,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-contact">Contatc Us</button>
                        <div className="p-4">Best plan to sync approx.<br/> <b>+177,000 items</b></div>
                        <div className="check-item">✓</div>
                        <div className="check-item">✓</div>
                        <button className="btn btn-contact">Contatc Us</button>
                        <div className="check-item">✓</div>
                        </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div class="row">
                    <div class="col-lg-7 p-0">
                        <img src={tableMeeting} alt='meeting' className="case-image" />
                    </div>
                    <div class="col-lg-5 table-right">
                        <div className="meeting-text"><h3>FOR <span className="on-premise-apps">ON-PREMISE APPS</span>, PLEASE CONTACT US.</h3></div>
                        <button className="btn quote" onClick={redirectToRequestQuote}>Request Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;