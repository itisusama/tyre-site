import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const Cards = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleNextClick = () => {
      const carouselWidth = $(".carousel-inner")[0].scrollWidth;
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition < carouselWidth - cardWidth * 4) {
        setScrollPosition(scrollPosition + cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition + cardWidth }, 600);
      }
    };

    const handlePrevClick = () => {
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition - cardWidth }, 600);
      }
    };

    $(".carousel-control-next").on("click", handleNextClick);
    $(".carousel-control-prev").on("click", handlePrevClick);

    return () => {
      // Cleanup event listeners
      $(".carousel-control-next").off("click", handleNextClick);
      $(".carousel-control-prev").off("click", handlePrevClick);
    };
  }, [scrollPosition]);


  return (
    <>
    <div id="carouselExampleControls" className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card" data-aos="zoom-in">
            <div className="img-wrapper">
              <img src={"images/img-11.jpg"} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="carousel-item">
          <div className="card" data-aos="zoom-in">
            <div className="img-wrapper">
              <img src={"images/img-11.jpg"} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="carousel-item">
          <div className="card" data-aos="zoom-in">
            <div className="img-wrapper">
              <img src={"images/img-11.jpg"} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="carousel-item">
          <div className="card" data-aos="zoom-in">
            <div className="img-wrapper">
              <img src={"images/img-11.jpg"} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>    
    </>
  )
}

export default Cards
