import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';

function Faq() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const navigate = useNavigate();

    const redirectToRequestQuote = () => {
        navigate('/on-premise');
    }

    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <p className='title online-title'>FREQUENTLY ASKED QUESTIONS</p>
                </div>
            </div>
            <div className="container">
                <div className="row title faq-title mt-5">
                    ONLINE SERVICES 
                </div>
                <div className="row title faq-sb-title mt-3">
                    ONLINE SERVICES IN GENERAL 
                </div>
                <div className="row faq-sb2-title">How much does it cost?</div>
                <div className="row faq-description">How much does it cost?</div>
            </div>
        </div>
    )
}

export default Faq;