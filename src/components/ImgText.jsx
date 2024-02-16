import React from 'react'

const ImgText = () => {
  return (
    <>
     <section className="ts-image-text container">
        <div className="row">
            <div className="col-lg-6">
                <img src={"images/img-1.jpg"} className='img-fluid rounded'/>
            </div>
            <div className="col-lg-6">
                <h5>Welcome to!</h5>
                <h2>Heading Goes Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci esse repellendus in maiores est itaque iste consequuntur aperiam quaerat ex, numquam recusandae consectetur impedit culpa amet soluta illum nihil.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci esse repellendus in maiores est itaque iste consequuntur aperiam quaerat ex, numquam recusandae consectetur impedit culpa amet soluta illum nihil.</p>
                <button className='btn btn-success rounded'>Contact Us</button>
            </div>
        </div>
     </section> 
    </>
  )
}

export default ImgText
