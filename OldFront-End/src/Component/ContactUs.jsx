import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContactUs } from '../Store/ActionCreaters/ContactUsActionCreater';

export default function ContactUs() {
    // let dispatch = useDispatch();
    let [message, setMessage] = useState('')
    let [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    function getInputData(e) {
        let { name, value } = e.target;
        setData(old => ({
            ...old, [name]: value
        }));
    }

    async function postData(e) {
        e.preventDefault();
     if(data.phone.length == 10){
          // dispatch(addContactUs({ data, date: new Date(), active: true }));
          let response = await fetch('/api/contactUs', {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(data)
        })
        response = await response.json()
        if (response)
            setMessage(response.message)
        else
            setMessage(response.message)

        setData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
     }
     else
     alert('Phone Number Contain 10 Digits')

    }

    return (
        <>
            {/* <!-- Page Content --> */}
            <div className="page-heading-contact page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Contact Us</h1>
                            <span>Feel free to send us a message now!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="bi bi-phone"></i>
                                <h4>Phone</h4>
                                <p>This is Mobile Number of BR Ambedkar Fund Akbarpur Chedri.</p>
                                <a href="#">+91 9756053579</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="bi bi-envelope"></i>
                                <h4>Email</h4>
                                <p>This is Email of BR Ambedkar Fund Akbarpur Chedri.</p>
                                <a href="#">brambedkarfund@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location</h4>
                                <p>Ward No. 1, Akbarpur Chaidri ,NayaGaon, Dhampur Road Kanth, Moradbad <b>UP 244501</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Contact Form  --> */}
            <div className="container-fluid contact-form">
                <h2 className="pt-5 pb-3">Send Your Query</h2>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-6">
                            <h6 className='text-success mb-2'>{message}</h6>
                            <form onSubmit={postData} >
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    onChange={getInputData}

                                    style={{ borderRadius: "0" }}
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    required
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    onChange={getInputData}

                                    style={{ borderRadius: "0" }}
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    required
                                    placeholder="Your Email"
                                />
                                <input
                                    type="tel"
                                    className="form-control mb-3"
                                    onChange={getInputData}

                                    style={{ borderRadius: "0" }}
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    required
                                    placeholder="Your Phone Number"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    onChange={getInputData}

                                    style={{ borderRadius: "0" }}
                                    name="subject"
                                    id="subject"
                                    value={data.subject}
                                    required
                                    placeholder="Your Subject"
                                />
                                <textarea
                                    className="form-control mb-3"
                                    onChange={getInputData}

                                    style={{ borderRadius: "0" }}
                                    name="message"
                                    id="message"
                                    value={data.message}
                                    required
                                    placeholder="Type Your Message here.."
                                ></textarea>
                                <button
                                    type="submit"
                                    className="btn btn-primary mb-3"
                                    style={{ borderRadius: "0" }}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27897.244959139218!2d78.65405758441662!3d29.071546060418125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bad2a8491324b%3A0xfe972e5fec3fb616!2z4KSa4KWH4KSC4KSm4KSw4KWAIOCkheCkleCkrOCksOCkquClgeCksCwg4KSJ4KSk4KWN4KSk4KSwIOCkquCljeCksOCkpuClh-CktiAyNDQ1MDE!5e0!3m2!1shi!2sin!4v1719036797895!5m2!1shi!2sin"
                                width="100%"
                                height="350"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
