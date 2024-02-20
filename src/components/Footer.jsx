import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid py-y dark-color'>
        <section className=' container mt-4 bg-dark'>
            {/* columns */}
            <section className='row'>
                <div className="col-6 col-md-2 mb-3">
                    <h4 className='fw-bolder text-light'>Section</h4>
                    <ul className='list-unstyled text-light'>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h4 className='fw-bolder text-light'>Section</h4>
                    <ul className='list-unstyled text-light'>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h4 className='fw-bolder text-light'>Section</h4>
                    <ul className='list-unstyled text-light'>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                        <li><a href="#" className="text-light">Link</a></li>
                    </ul>
                </div>

                <div className="col-md-5 mb-3">
                    <form>
                        <h5 className="text-light">Subscribe to our newsletter</h5>
                        <p className="text-light">Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden text-light">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-success" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p className="text-light">© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </section>
        </section>
      </footer>
    </>
  )
}

export default Footer;
