import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import CustomCarousel from './Carousel';


const items = [
    {
        pic: 'assets/image/Lokesh(1).jpeg',
        clientName: "LOKESH SURYA ",
        profession: 'Student',
        Discription: `Nice SERVICE !! Because of its easy-to-use UI and practical payment alternatives, I adore this site. However, in order to handle larger transaction amounts, I would like to propose including a prepaid credit limit mechanism. I also like how easy and quick the transactions were that I had on my first app use. `
    },
    {
        pic: 'assets/image/Sandeep.jpeg',
        clientName: "Dr. SANDEEP ",
        profession: 'Doctor',
        Discription: "Better than others! BR AMBEDKAR FUND is a fantastic mobile payment application known for its security and dependability. I've been using it for a long time and find it quite enjoyable.The app supports seamless money transfers and even has a chat option to make transactions easier.  "
    },
    {
        pic: 'assets/image/shahrukh.jpeg',
        clientName: "MR. ShahRukh ",
        profession: 'Medical Service ',
        Discription: `This BR AMBEDKAR FUND provides a seamless user experience, allowing customers to handle their banking needs without the hassle of visiting a physical branch. The interface is intuitive, making it easy to navigate through various features such as checking account balance. `
    },
    {
        pic: 'assets/image/Rakesh.jpeg',
        clientName: "DR. Rakesh  ",
        profession: 'Doctor',
        Discription: `I am using this service BR AMBEDKAR FUND from last 1 year. It's nice service, users friendly and clear. Main part is time to time nav update and not 3rd party available. We can buy Direct plan.  we can overlook that, All over good service.the Transaction History page is also good.`
    },
];


export default function Home() {


    return (
        <>
            <div className="container-fluid home-image"></div>
            <div className="services">
                <div className="container-fluid">
                    <div className="row service-row">
                        <h2 className="text-center">Financial Services</h2>
                        <span className=" mb-5 finance-span ">
                            We are mainly focused on the finance ,loan service category so, we provide finace ,loan service related content if you are interested in the finace ,loan service category then you can visit daily to get more latest information.
                            This BR AMBEDKAR FUND provides a seamless user experience, allowing customers to handle their banking needs without the hassle of visiting a physical branch. The interface is intuitive, making it easy to navigate through various features such as checking account balances, transferring funds, paying bills, and managing investments. The app's design is clean and user-friendly, with clear menu Overall, the bank app is a convenient and efficient tool for managing finances on the go, providing a seamless exp.
                        </span>
                        {/* <!-- Fixed Deposit Card --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card" style={{ height: "390px" }}>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>assured_workload</span>
                                        <h5 className="card-title">Fixed Deposit</h5>
                                    </div>
                                    <hr />
                                    <ul className="list-unstyled pt-3">
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Get high ROI on fresh & renewal of FD & enjoy special rates on Digital FD</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>You can start investment in FD at ₹10,000 & also get a loan against it</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>You can also invest in Ambedkar Fund Systematic Deposit Plan with just ₹ 5,000</span>
                                        </li>
                                    </ul>
                                   
                                </div>
                                <button style={{ textAlign:"right",backgroundColor:"#003399",border:'none',paddingRight:'14px',paddingBottom:"10px"}}>
                                        <a href="" className='text-light' >APPLY NOW</a>
                                    </button>
                            </div>
                        </div>
                        {/* <!-- Loans Card --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card" style={{ height: "390px" }}>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>real_estate_agent</span>
                                        <h5 className="card-title">Loans</h5>
                                    </div>
                                    <hr />
                                    <ul className="list-unstyled pt-3">
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Finance Amount: ₹5000 to ₹ 2 Lakh</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Repayment Tenure: 3 to 24 months</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Rate of Interest / Annual Percentage Rate (APR): 11% to 36%</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Processing Fees: up to 3% of disbursed amount Incl of Taxes</span>
                                        </li>
                                    </ul>
                                </div>
                                <button style={{ textAlign:"right",backgroundColor:"#003399",border:'none',paddingRight:'14px',paddingBottom:"10px"}}>
                                        <a href="" className='text-light' >APPLY NOW</a>
                                    </button>
                            </div>
                        </div>
                        {/* <!-- Mutual Fund Card --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card" style={{ height: "390px" }}>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>crowdsource</span>
                                        <h5 className="card-title">Mutual Fund</h5>
                                    </div>
                                    <hr />
                                    <ul className="list-unstyled pt-3">
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Investment in Mutual Funds starts with an amount as low as ₹100.</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>You can invest in any Mutual Fund via monthly SIP or pay lumpsum.</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Mutual Fund SIP calculators can help you draw an estimate & plan well.</span>
                                        </li>
                                    </ul>
                                </div>
                                <button style={{ textAlign:"right",backgroundColor:"#003399",border:'none',paddingRight:'14px',paddingBottom:"10px"}}>
                                        <a href="" className='text-light' >APPLY NOW</a>
                                    </button>
                            </div>
                        </div>
                        {/* <!-- Life Insurance Card --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card" style={{ height: "390px" }}>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>partner_exchange</span>
                                        <h5 className="card-title">Life Insurance</h5>
                                    </div>
                                    <hr />
                                    <ul className="list-unstyled pt-3">
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Find all your financial relations at a glance</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Use EMI calculators & pay your EMIs online</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Avail quick assistance online for your queries</span>
                                        </li>
                                        <li className="d-flex text-center" style={{ fontSize: "14px" }}>
                                            <span className="material-symbols-outlined">check</span>
                                            <span className="ml-2" style={{ marginLeft: '1rem' }}>Check CIBIL score & get credit health report online</span>
                                        </li>
                                    </ul>
                                </div>
                                <button style={{ textAlign:"right",backgroundColor:"#003399",border:'none',paddingRight:'14px',paddingBottom:"10px"}}>
                                        <a href="" className='text-light' >APPLY NOW</a>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="why-choose-us container-fluid mt-5" id="why-choose-us">
                <div className="row">
                    <div className="col-md-12 why-choose-us-heading text-center">
                        <h2>Why Choose Us</h2>
                        <p>
                            There are millions of websites created every day, also, there is much fake content spread on the internet.
                            So, Our main goal is to provide you with 100% Original and Safe content that provides you a great and better experience on the world wide web.
                            We mainly focus on our service so and improving it regularly to provide a better user experience to all users.
                            Basically, we focus on the finance, loan service niche so, our main priority is to search for new content and present it in front of you to learn something new.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>quick_reference_all</span>
                                <h5 className="card-title">We're Quick</h5>
                                <p className="card-text">
                                    Our Financing processes are designed to disburse funds with minimal paperwork and a quick turnaround.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>hub</span>
                                <h5 className="card-title">We're Convenient</h5>
                                <p className="card-text">
                                    Our website ensures you can manage your loans, payments, and investments anywhere anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>in_home_mode</span>
                                <h5 className="card-title">We're Next Door</h5>
                                <p className="card-text">
                                    With a network of 1+ branches and door-to-door services, we are always by your side.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-4 ">
                    <div className="col-6 col-md-3 mb-3">
                        <Counter target={1000} text="Satisfied Customers" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <Counter target={26} text="Villages Covered" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <Counter target={40} text="Cities Covered" />
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <Counter target={1} text="Branches in India" />
                    </div>
                </div>
            </section>

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left-image d-flex align-item-center justify-content-center text-align-center">
                                            <img src="assets/image/ShushilKumar.jpeg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center">
                                        <div className="right-content">
                                            <span className="text-light">Who we are</span>
                                            <h2>Get to know about <em className="text-warning">Br Ambedkar Fund</em></h2>
                                            <p className="text-light">
                                                BR AMBEDKAR FUND is trusted by 50K+ customers all over India for their financial and payment needs. With this service, you can apply online for personal loan, home loan, gold loan, etc. You can shop offline from 1 million+ products at no-cost EMI, manage investments, get insurance, and do much more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading what-they-say-heading">
                                <h2>What they say about us</h2>
                            </div>
                        </div>
                        <div>
                            <CustomCarousel items={items} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5 mt-5 helpline">
                <p>k</p>
                <div className="row mt-2">
                    <div className="col-md-4 col-sm-12 order-md-1 order-sm-2">
                        <img src="assets/image/Help1(1).jpeg" height="190px" width="100%" alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12 bg-light helpline-card-center  order-md-2 order-sm-3">
                        <div className='helpline-icon'>
                            <img src="assets/image/Help1(2).jpeg" height="34px" alt="" style={{ marginRight: '10px' }} />
                            <img src="assets/image/Help1(3).jpeg" height="34px" alt="" style={{ marginLeft: '10px' }} />
                        </div>
                        <span>DIAL <b>1930</b> FOR ONLINE FINANCIAL FRAUD</span>
                        <hr />
                        <span className="d-flex">Report any Cybercrime at <b> WWW.CYBERCRIME.GOV.IN</b></span>

                    </div>


                </div>
                <p>k</p>
            </div>

        </>
    );
}
