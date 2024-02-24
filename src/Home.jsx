import React from 'react';
import Carousel from './components/Carousel';
import { Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import HowSection from './components/HowSection';

const Home = () => {
    
  return (
    <>

     <Carousel/>

      <section className='container'>
        <Row style={{ marginTop: '4rem' }}>
          <Col md={6} data-aos="fade-right">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. sint dolor velit reiciendis voluptatum, nihil quia corrupti</p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img src="https://via.placeholder.com/500x350?text=Heading" alt="Mission" className="img-fluid" />
          </Col>
        </Row>
      </section>

     <div className='mt-4'>
        <div className="row text-center justify-content-center" data-aos="zoom-in-up">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </div>
        <div className='w-75 mx-auto' data-aos="zoom-in-up"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda.</p></div>
     </div>
     
     <section className='container'><Cards/></section>
     
     <Banner/>

     <section className='container'>
        <Row style={{ marginTop: '6rem' }}>
          <Col md={6} className='order-2' data-aos="fade-left">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6} className='order-1' data-aos="fade-right">
            <img src="https://via.placeholder.com/500x350?text=Tire+Service" alt="Mission" className="img-fluid" />
          </Col>
        </Row>
      </section>

     <Testimonial/>
     
      <HowSection/>

    </>
    
  )
}

export default Home
