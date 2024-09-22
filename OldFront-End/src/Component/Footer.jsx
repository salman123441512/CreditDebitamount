import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
       <footer>
        <div className="container">

            <div className="container-fluid footer mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <Link className="navbar-brand-footer" to="index.html">
                                <img src="assets/image/Br.png" height="150px" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Our Office</h5>

                            <section className="d-flex mb-2">
                                <span><i className="bi bi-geo-alt-fill me-3"></i></span>
                                <span>Ward No. 1, Akbarpur Chaidri ,NayaGaon, Dhampur Road Kanth,Moradbad <b> 244501 UP</b></span>
                            </section>
                            <section className="d-flex mb-2">
                                <span><i className="bi bi-telephone-fill me-3"></i></span>
                                <span><a href="tel:+919771134034" className="text-white text-decoration-none">+91 9771134034</a></span>
                            </section>
                            <section className="d-flex mb-2">
                                <span><i className="bi bi-envelope me-3"></i></span>
                                <span><a href="mailto:brambedkarfund@gmail.com" className="text-white text-decoration-none">brambedkarfun123@gmail.com</a></span>
                            </section>
                            <div className="d-flex pt-3 justify-content-between me-5 fs-5">
                                <span className="social-icons fw-bold"><Link rel="nofollow" to="https://www.facebook.com" target="_blank"><i className="bi bi-facebook text-light"></i></Link></span>
                                <span className="social-icons fw-bold"><Link to="https://www.twitter.com"><i className="bi bi-twitter text-light"></i></Link></span>
                                <span className="social-icons fw-bold"><Link to="https://www.instagram.com"><i className="bi bi-instagram text-danger"></i></Link></span>
                                <span className="social-icons fw-bold"><Link to="https://wa.me/+91 9149219791"><i className="bi bi-whatsapp text-success"></i></Link></span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <section className="d-flex flex-column ">
                                <span className="quick-links mb-2"><i className="bi bi-chevron-right"></i><Link className="text-white text-decoration-none" to="/about">About Us</Link></span>
                                <span className="quick-links mb-2"><i className="bi bi-chevron-right"></i><Link className="text-white text-decoration-none" to="/contactus">Contact Us</Link></span>
                                <span className="quick-links mb-2"><i className="bi bi-chevron-right"></i><Link className="text-white text-decoration-none" to="/home">Our Services</Link></span>
                                <span className="quick-links mb-2"><i className="bi bi-chevron-right"></i><Link className="text-white text-decoration-none" to="/#">Terms & Condition</Link></span>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Business Hours</h5>
                            <p className="mb-1">Monday - Friday</p>
                            <h6 className="text-light">09:00 am - 07:00 pm</h6>
                            <p className="mb-1">Saturday</p>
                            <h6 className="text-light">09:00 am - 12:00 pm</h6>
                            <p className="mb-1">Sunday</p>
                            <h6 className="text-light">Closed</h6>
                        </div>
                    </div>
                </div>
                <hr/>
            <div className="container text-center">
                <p>Copyright &copy; 2024 BR Ambedkar Fund. All rights reserved</p>
            </div>
            </div>  
        </div>
    </footer>
        
    </>
  )
}
