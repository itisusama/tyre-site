import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import HowSection from './components/HowSection';

const headerStyle = {
    marginTop: '95px',
    backgroundImage: `url("https://via.placeholder.com/1200x400")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    height: '50vh'
};

const ServicePage = ({pageTitle, ...otherProps}) => {
    const { 
        headingTwo, 
        headingOne, 
        headingThree, 
        headingFour, 
        headingFive, 
        paraOne, 
        paraTwo, 
        paraThree,
        paraFour,
        paraFive } = otherProps;
  return (
    <>
      {/* Banner Section */}
     <header style={headerStyle}>
        <h1>{pageTitle}</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | {pageTitle}</h5>
    </header>
    
    <div className='mt-4'>
            <div className="row text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">{headingOne}</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>{paraOne}</p></div>
    </div>

    {/* Image and Text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col md={6}>
                <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />
            </Col>
            <Col md={6}>
                <h2>{headingTwo}</h2>
                <p>{paraTwo}</p>
                <a href="" className="btn btn-success rounded-pill py-2 px-4">Contact Us</a>
            </Col>
        </Row>
    </div>

    {/* Image overlay */}
    <section className='container mt-4'>
        <div className='mt-4'>
                <div className="row text-center justify-content-center">
                    <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                        <div className="section-title">
                            <h2 className="sec-title">{headingThree}</h2>
                        </div>
                    </div>
                </div>
            <div className='w-75 mx-auto'><p>{paraThree}</p></div>
        </div>
        <div className="row">
            {/* 1 */}
            <div className="col-md-4">
                <div className="parent-container">
                    <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="col-md-4">
                <div className="parent-container">
                    <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="col-md-4">
                <div className="parent-container">
                    <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    </section>
    {/* Text */}
    <div className='mt-4'>
            <div className="row text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">{headingFour}</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>{paraFour}</p></div>
    </div>
    
    {/* Image and text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col md={6} className='order-2'>
                <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />
            </Col>
            <Col md={6} className='order-1'>
                <h2>{headingFive}</h2>
                <p>{paraFive}</p>
            </Col>
        </Row>
    </div>
    {/* How it works */}
    <HowSection/>
    </>
  )
}

export default ServicePage
