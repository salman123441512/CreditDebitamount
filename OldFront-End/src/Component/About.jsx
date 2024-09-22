import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
     <div className="page-heading-about page-heading header-text">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>About Us</h1>
                    <span>We have over 10 years of experience</span>
                </div>
            </div>
        </div>
    </div>

    <div className="more-info about-info ">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="more-info-content1">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <div className="right-content">
                                    <span>our solid background on finance</span>
                                    <h2>Get to know about <em >BR Ambedkar Fund</em></h2>
                                    <p>BR AMBEDKAR FUND is trusted by 50K+ customers all over India for their financial and payment needs. With this service, you can apply online for personal loan, home loan, gold loan, etc. You can shop offline from 1 million+ products at no-cost EMI, manage investments, get insurance, and do much more. 
                                    </p>
                                    <Link href="" className="filled-button btn btn-primary">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-image ">
                                    <img src="assets/image/ShushilKumar.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2>Our team <em>members</em></h2>
                        <span>Suspendisse a ante in neque iaculis lacinia</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="team-item">
                        <img src="assets/image/BrajjetSingh.jpeg"  height="290px" alt="" />
                        <div className="down-content">
                            <h4>Brajjet Singh</h4>
                            <span>Co-Founder</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna,
                                semper quis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="team-item">
                        <img src="assets/image/ShushilKumar.jpeg" height="290px" alt="" />
                        <div className="down-content">
                            <h4>Sushil Kumar</h4>
                            <span>Chief Marketing Officer</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna,
                                semper quis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="team-item">
                        <img src="assets/image/ArunKumar.jpeg" height="290px" alt="" />
                        <div className="down-content">
                            <h4>Arun Kumar</h4>
                            <span>Financial Analyst</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna,
                                semper quis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}
