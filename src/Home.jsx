import React from 'react';
import Carousel from './components/Carousel';
import ImgText from './components/ImgText';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    const dynamicImgSrc = "images/img-new.jpg";
    const dynamicHeading5 = "Welcome to!";
    const dynamicHeading2 = "Dynamic Heading";
    const dynamicParagraph1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, soluta, incidunt, laborum repellat excepturi quia eveniet tempora praesentium odit dignissimos recusandae cumque consectetur quaerat earum eaque a delectus. Est, omnis?";
    const dynamicParagraph2 = dynamicParagraph1;
    const dynamicBtn = "Contact Us";

  return (
    <>
    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>

     <Carousel/>
     <ImgText
        imgSrc={dynamicImgSrc}
        heading5={dynamicHeading5}
        heading2={dynamicHeading2}
        paragraph1={dynamicParagraph1}
        paragraph2={dynamicParagraph2}
        btnText={dynamicBtn}
     /> 
     <div className='mt-4'>
        <div className="row text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </div>
        <div className='w-75 mx-auto'><p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis, sit amet fringilla odio lectus nec nunc. Ut auctor velit sit amet tortor efficitur, vel tincidunt purus pellentesque. Nunc quis odio sit amet velit ullamcorper rhoncus. Vivamus nec purus in elit hendrerit tincidunt. Proin a urna vel sapien vestibulum feugiat. Curabitur nec justo et justo tincidunt tincidunt. Integer in ultricies erat. Vestibulum ac eros eu turpis convallis bibendum ut non quam.</p></div>
     </div>
     
     <Cards/>
     <Cards/>

     <Banner/>

     <section className="ts-image-text container">
        <div className="row">
          <div className="col-lg-6">
            <img src={"images/img-10.jpg"} className='img-fluid rounded' alt="Dynamic Image"/>
          </div>
          <div className="col-lg-6">
            <h2 className='fw-bolder'>Heading goes here</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem amet quos dignissimos nisi sed eligendi debitis maiores dolorem non quod architecto aut totam eaque quo adipisci cupiditate cum ea!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem amet quos dignissimos nisi sed eligendi debitis maiores dolorem non quod architecto aut totam eaque quo adipisci cupiditate cum ea!</p>
          </div>
        </div>
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
