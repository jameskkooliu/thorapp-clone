import React from "react";
import pic1 from '../../assets/images/Computer with Graph.webp';
import pic2 from '../../assets/images/Business Meeting.webp';
import pic3 from '../../assets/images/helloquence-5fNmWej4tAA-unsplash.webp';
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import pic4 from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp';

import './online.css'
function Online() {
  return (
    <div>
      <div className='online-container mb-5'>
        <img src={header} width='100%' height='348px' style={{ opacity: '0.3' }}></img>
        <div className='centered'>
          <p className='title'>CONNECTING PEOPLE TO DATA</p>
          <h4><span>We streamline the way insight-driven companies experience SharePoint and
            other Microsoft products</span></h4>
        </div>
      </div>
      <div className='online-content'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-3'>
            <div className='container'>
              <div className='image-container d-flex justify-content-center'>
                <button className='bottom btn btn-primary'>BI SERVICE</button>
                <img src={pic1} width='120%' alt='' className='mb-4'></img>
              </div>
              <div className='text-center'>
                <h2>Real-time collaboration for BI reports in SharePoint Online</h2>
              </div>
              <div>
                <p className='text-center'>
                  Get immediate access to your data from different sources
                  using SQL Server Reporting in a format that works for you.
                  Create, export and schedule stunning dashboards and get
                  actionable insights at your fingertips. </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='container'>
              <div className='image-container d-flex justify-content-center'>
                <button className='bottom content-button'>LIST SYNC</button>
                <img src={pic2} width='120%' alt='' className='mb-4'></img>
              </div>
              <div className='text-center'>
                <h2 className=''>
                  Replicate your list items to SQL in real-time in SharePoint Online
                </h2>
              </div>
              <div>
                <h5 className='text-center'>
                  Gain immediate access to all of your SharePoint lists in one place.
                  With data collated and stored in SQL, you'll be running reports
                  in a fraction of the time.  </h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='container'>
              <div className='image-container d-flex justify-content-center'>
                <button className='bottom btn btn-primary'>PROJECT SYNC</button>
                <img src={pic3} width='120%' alt='' className='mb-4'></img>
              </div>
              <div className='text-center'>
                <h2>
                  Access all your entities across Project Online
                </h2>
              </div>
              <div>
                <p className='text-center'>
                  Compile a complete picture of your project
                  replicating project entities into SQL database
                  in just a fraction of the time. Be ready
                  for your next meeting, armed with immediate access
                  to accurate data. </p>
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
                <div className="online-second-part-item1 mt-4">
                  <h3 className="p-4 text-white text-center border-bottom">WHAT PEOPLE SAY</h3>
                </div>
                <div className="online-second-part-item2 text-white">
                  <h1>“ThorApps products have consistently delighted our customers; 
                    simplicity in design, installation, and configuration belies 
                    the powerful nature of the apps and their overwhelming positive 
                    impact for the business.”</h1>
                </div>
                <div className="">
                  <img src={pic4}></img>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <h1>adfdf</h1>
            </div>
            <div className="carousel-item">
              <h1>add</h1>
            </div>
            <div className="carousel-item">
              <h1>addww</h1>
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
    </div>
  )
}

export default Online;