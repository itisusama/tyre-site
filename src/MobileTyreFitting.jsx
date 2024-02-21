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

const MobileTyreFitting = () => {
  return (
    <>
     {/* Banner Section */}
     <header style={headerStyle}>
        <h1>Mobile Tyre Fitting</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Mobile Tyre Fitting</h5>
    </header>
    
    <div className='mt-4'>
            <div className="row text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">The Heading Goes Here</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis, sit amet fringilla odio lectus nec nunc. Ut auctor velit sit amet tortor efficitur, vel tincidunt purus pellentesque. Nunc quis odio sit amet velit ullamcorper rhoncus. Vivamus nec purus in elit hendrerit tincidunt. Proin a urna vel sapien vestibulum feugiat. Curabitur nec justo et justo tincidunt tincidunt. Integer in ultricies erat. Vestibulum ac eros eu turpis convallis bibendum ut non quam.</p></div>
    </div>

    {/* Image and Text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col md={6}>
                <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />
            </Col>
            <Col md={6}>
                <h2>Heading Goes Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
                Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
                Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.</p>
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
                            <h2 className="sec-title">The Heading Goes Here</h2>
                        </div>
                    </div>
                </div>
            <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate.</p></div>
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
                        <h2 className="sec-title">The Heading Goes Here</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate.</p></div>
    </div>
    
    {/* Image and text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col md={6} className='order-2'>
                <img src="https://via.placeholder.com/500x350" alt="Mission" className="img-fluid" />
            </Col>
            <Col md={6} className='order-1'>
                <h2>Heading Goes Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
                Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
                Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia.</p>
            </Col>
        </Row>
    </div>
    {/* How it works */}
    <HowSection/>
    </>
  )
}

export default MobileTyreFitting
