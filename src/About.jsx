import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import aos from 'aos';
import { Link } from 'react-router-dom';

function About() {
  React.useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

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

  return (
    <div>
      {/* Banner Section */}
      <header style={headerStyle}>
        <h1>About Us</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | About</h5>
      </header>
      {/* Main Content */}
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
      <Container className="py-5">
        <Row data-aos="fade-up" style={{ marginTop: '4rem' }}>
          <Col md={6} data-aos="fade-right">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img src="https://via.placeholder.com/500x350?text=Tire+Service" alt="Mission" className="img-fluid" />
          </Col>
        </Row>

        <Row data-aos="fade-up" style={{ marginTop: '4rem' }}>
          <Col md={6} data-aos="fade-left" className='order-2'>
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col md={6} data-aos="fade-right" className='order-1'>
            <img src="https://via.placeholder.com/500x350?text=Our+Team" alt="Mission" className="img-fluid" />
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col md={6}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Convenient mobile service</li>
              <li>Wide selection of tyres</li>
              <li>Expertise and professionalism</li>
              <li>Competitive pricing</li>
              <li>Customer satisfaction guarantee</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Our Values</h2>
            <p>At Mobile Fit Tyres, we prioritize integrity, reliability, and safety in everything we do. We strive to build lasting relationships with our customers based on trust and transparency.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default About;