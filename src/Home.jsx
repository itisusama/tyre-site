import React from 'react'
import Carousel from './components/Carousel'
import ImgText from './components/ImgText'

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
    </>
  )
}

export default Home
