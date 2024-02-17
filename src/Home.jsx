import React from 'react';
import Carousel from './components/Carousel';
import ImgText from './components/ImgText';
import Cards from './components/Cards';

const Home = () => {
    const dynamicImgSrc = "images/img-new.jpg";
    const dynamicHeading5 = "Welcome to!";
    const dynamicHeading2 = "Dynamic Heading";
    const dynamicParagraph1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, soluta, incidunt, laborum repellat excepturi quia eveniet tempora praesentium odit dignissimos recusandae cumque consectetur quaerat earum eaque a delectus. Est, omnis?";
    const dynamicParagraph2 = dynamicParagraph1;
    const dynamicBtn = "Contact Us";
  return (
    <>
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
        <h2 className='text-center fw-bolder'>The Headeing of Tyre Site Goes Here</h2>
        <div className='ts-hr-line'></div>
        <div className='w-75 mx-auto'><p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis, sit amet fringilla odio lectus nec nunc. Ut auctor velit sit amet tortor efficitur, vel tincidunt purus pellentesque. Nunc quis odio sit amet velit ullamcorper rhoncus. Vivamus nec purus in elit hendrerit tincidunt. Proin a urna vel sapien vestibulum feugiat. Curabitur nec justo et justo tincidunt tincidunt. Integer in ultricies erat. Vestibulum ac eros eu turpis convallis bibendum ut non quam.</p></div>
     </div>
     <Cards/>
     <Cards/>

    {/* Banner */}
    <section className="pc-home-banner p-3 mt-3">
      <div className="container mx-auto py-3">
        <div className="row">
          {/* 1 */}
          <div className="col-lg-6">
            <h2 className="text-white"><b>Now we have <span className="text-red">2000</span> Locations</b></h2>
            <div>
              <p className="text-white">Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod.</p>
            </div>
            {/* Banner Icons Box */}
            <div className="pc-bi-box">
              {/* Icons */}
              <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                <div><i className="fa-solid fa-phone fa-2xl"></i></div>
                <div>
                  <span className="d-block text-white">For Booking Rides</span>
                  <h5 className="tc-text-color">+44 7883 846758</h5>
                  <span className="d-block text-white">We are present 24/7</span>
                </div>
              </div>
              {/* Icons */}
              {/* Icons */}
              <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                <div><i className="fa-solid fa-phone fa-2xl"></i></div>
                <div>
                  <span className="d-block text-white">For Booking Rides</span>
                  <h5 className="tc-text-color">+44 7883 846758</h5>
                  <span className="d-block text-white">We are present 24/7</span>
                </div>
              </div>
              {/* Icons */}
            </div>
            {/* Banner Icons Box */}
          </div>
          {/* 2 */}
          <div className="col-lg-6 mt-3">
            <div>
              <img src={'images/map.png'} alt="map" className="img-fluid" />
              {/* Numbers */}
              <div className="pc-bannerNumbers">
                {/* 1 */}
                <div>
                  <h2 className="tc-text-color">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 1</span>
                </div>
                {/* 2 */}
                <div>
                  <h2 className="tc-text-color">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 2</span>
                </div>
                {/* 3 */}
                <div>
                  <h2 className="tc-text-color">
                    1,000
                  </h2>
                  <span className="d-block text-white">Heading 3</span>
                </div>
                {/* END */}
              </div>
              {/* Numbers */}
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
