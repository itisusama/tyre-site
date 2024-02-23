import React from 'react'

const Carousel = () => {
  return (
    <>
    <section className='ts-heading'>
      <div className="d-sm-flex align-items-center justify-content-between w-100" style={{ height: '82vh' }}>
        <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline container">
          <span className="text-secondary text-uppercase" data-aos="fade-right">Subheadline</span>
          <h1 className="display-4 my-4 font-weight-bold" data-aos="fade-right">Enter Your <span style={{ color: 'green' }}>Headline Here</span></h1>
          <a href="#" className="btn btn-success px-5 py-3 text-white mt-3 mt-sm-0" data-aos="fade-right">Get Started</a>
        </div>
        {/* in mobile remove the clippath */}
        <div className="col-md-8 h-100 clipped" data-aos="fade-left" style={{ minHeight: '350px', backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
      </div>
    </section>
    </>
  )
}

export default Carousel