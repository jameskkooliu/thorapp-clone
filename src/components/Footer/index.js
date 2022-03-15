import React from 'react';

function Footer() {
  return (
    <div className='bg-dark'>
      <div className="d-flex justify-content-center bg-secondary mb-3 ">
        <div className="my-5 text-white border-end border-4">
          <div className='pe-3'>
            <h3 className='d-flex justify-content-end'><big>In</big></h3>
            <p className='d-flex justify-content-end'>Copyright@2019 Thor Apps</p>
            <p className='d-flex justify-content-end'>Bear Entrepreneurial Group Pty</p>
            <p className='d-flex justify-content-end'>Ltd trading as ThorApps</p>
            <p className='d-flex justify-content-end'>ABN 40 156 405 275</p>
          </div>
        </div>
        <div className="my-5 text-white">
          <div className='ms-3 mt-2'>
            <p className=''>Privacy Policy</p>
            <p className=''>Returns Policy</p>
            <p className=''>Terms & conditions</p>
            <p className=''>End user License Agreement</p>
            <p className=''>Shipping and Delivery</p>
            <p className=''>End user License Agreement</p>
            <p className=''>Terms of Service</p>
            <p className=''>Service level Agreement</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;