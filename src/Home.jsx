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
    </>
  )
}

export default Home
