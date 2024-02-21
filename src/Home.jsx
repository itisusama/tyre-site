import React from 'react';
import Carousel from './components/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';

const Home = () => {
    
  return (
    <>

     <Carousel/>

      <section className='container'>
        <Row style={{ marginTop: '4rem' }}>
          <Col md={6}>
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/500x350?text=Heading" alt="Mission" className="img-fluid" />
          </Col>
        </Row>
      </section>

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
     
     <Cards/>
     <Cards/>

     <Banner/>

     <section className='container'>
        <Row style={{ marginTop: '6rem' }}>
          <Col md={6} className='order-2'>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6} className='order-1'>
            <img src="https://via.placeholder.com/500x350?text=Tire+Service" alt="Mission" className="img-fluid" />
          </Col>
        </Row>
      </section>

     <Testimonial/>
     
      {/* How it works */}
      <div className="container">
    <div className="row text-center justify-content-center">
        <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
                <h2 className="sec-title">How It Works</h2>
            </div>
        </div>
    </div>
    <div className="row justify-content-between">
        <div className="col-md-6 col-xl-auto process-box mb-10">
            <span className="process-number">01</span> <span className="process-icon"><i className="fa-solid fa-headphones"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Call Us</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10">
            <span className="process-number">02</span> <span className="process-icon"><i className="fa-solid fa-user"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Get The Expert</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10">
            <span className="process-number">03</span> <span className="process-icon"><i className="fa-solid fa-arrow-rotate-left"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Get Tyre Fixed</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10">
            <span className="process-number">04</span> <span className="process-icon"><i className="fa-solid fa-hand-holding-dollar"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Payment</h3>
        </div>
    </div>
    <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus suscipit odit modi itaque expedita ipsam autem, quasi quam ratione eos aperiam ex harum sed est quia et voluptates quaerat rerum perspiciatis mollitia. Ratione qui dolore iste in!
    </p>
</div>

    </>
    
  )
}

export default Home
