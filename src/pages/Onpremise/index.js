import React from 'react'
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import pic1 from '../../assets/images/Computer with Graph.webp';
import pic2 from '../../assets/images/Business Meeting.webp';
import pic3 from '../../assets/images/helloquence-5fNmWej4tAA-unsplash.webp';
import './onpremise.css'
import Quote from '../../components/Quote';

const OnPremise = () => {
  return (
    <div className='premise'>
        <div className='onpremise-container'>
          <div className='bg-img'>
            <img src={header} alt="not found" width='100%' style={{opacity:'0.3'}}></img>
          </div>
          <div className='centered'>
            <p className='title container-title'>ON-PREMISE APPS</p>
            <h5><span>Make the most from your SharePoint and Project environment</span></h5>
            <button className='button text-white'>Request a Quote</button>
          </div>
        </div>
        <div className='container'>
            <div className='row showcase mt-5'>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                            <button className='bottom btn btn-primary'>PROJECT SNAPSHOTS</button>
                            <img src={pic1} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='contet-title'>Project server integration in minutes, not weeks!</span>
                        </div>
                        <div>
                            <p className='text-center content-description'>
                            The Project Integration Engine (PIE for short) makes it easy to integrate other systems data into Project Server. Create Projects, Tasks, Resources, Assignments (and more) and keep them in sync with your other systems</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                            <button className='bottom btn btn-primary'>PROJECT SNAPSHOTS</button>
                            <img src={pic2} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='contet-title'>Snapshot your project now or on a schedule</span>
                        </div>
                        <div>
                            <p className='text-center content-description'>
                            Take a Snapshot of your Project as it is at a point in time. Not just the information stored in Project Server, Project Snapshots lets you take snapshots of all information related to your project even from other Line of Business systems.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                            <button className='bottom btn btn-primary'>PROJECT SNAPSHOTS</button>
                            <img src={pic3} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='contet-title'>Multi-site,real-time SharePoint reporting </span>
                        </div>
                        <div>
                            <p className='text-center content-description'>
                            Reflex Reporting makes it easy to produce reports from content in your SharePoint lists. The core function of Reflex Reporting mirrors SharePoint List items into a SQL table in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Quote />
    </div>
    
  )
}

export default OnPremise