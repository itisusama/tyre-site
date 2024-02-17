import React from 'react';

const ImgText = ({ imgSrc, heading5, heading2, paragraph1, paragraph2, btnText }) => {
  return (
    <>
      <section className="ts-image-text container">
        <div className="row">
          <div className="col-lg-6">
            <img src={imgSrc} className='img-fluid rounded' alt="Dynamic Image"/>
          </div>
          <div className="col-lg-6">
            <h5>{heading5}</h5>
            <h2>{heading2}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <button className='btn btn-success rounded'>{btnText}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ImgText;
