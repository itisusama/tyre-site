import React from 'react';

const Cards = () => {
  return (
    <>
    <section className="container">
      <div className="row">
        
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2 py-2 rounded">
            <div>
              <img src={'images/img-new.jpg'} alt="1" className='img-fluid rounded' />

              <h2 className='fw-bolder text-center'>Card Heading</h2>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui ad alias eveniet deleniti, consectetur amet? Animi, corporis eligendi. Commodi cum ex doloribus, dolor, iusto voluptas minus magnam similique, eos atque magni?</p>
              <div className='d-flex justify-content-center'><button className='btn btn-success rounded-pill py-2 px-4'>Read More</button></div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mt-2 py-2 rounded">
            <div>
              <img src={'images/img-new.jpg'} alt="1" className='img-fluid rounded' />

              <h2 className='fw-bolder text-center'>Card Heading</h2>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui ad alias eveniet deleniti, consectetur amet? Animi, corporis eligendi. Commodi cum ex doloribus, dolor, iusto voluptas minus magnam similique, eos atque magni?</p>
              <div className='d-flex justify-content-center'><button className='btn btn-success rounded-pill py-2 px-4'>Read More</button></div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mt-2 py-2 rounded">
            <div>
              <img src={'images/img-new.jpg'} alt="1" className='img-fluid rounded' />

              <h2 className='fw-bolder text-center'>Card Heading</h2>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui ad alias eveniet deleniti, consectetur amet? Animi, corporis eligendi. Commodi cum ex doloribus, dolor, iusto voluptas minus magnam similique, eos atque magni?</p>
              <div className='d-flex justify-content-center'><button className='btn btn-success rounded-pill py-2 px-4'>Read More</button></div>
            </div>
        </div>

      </div>
    </section>    
    </>
  )
}

export default Cards
