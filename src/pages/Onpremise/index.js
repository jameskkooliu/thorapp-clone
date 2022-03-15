import React from 'react'
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import './onpremise.css'
const OnPremise = () => {
  return (
    <div className='onpremise-container'>
      <div className='bg-img'>
        <img src={header} width='100%' style={{opacity:'0.3'}}></img>
      </div>
      <div className='centered'>
        <p className='title'>ON-PREMISE APPS</p>
        <h5><span>Make the most from your SharePoint and Project environment</span></h5>
        <button className='button text-white'>Request a Quote</button>
      </div>
    </div>
  )
}

export default OnPremise