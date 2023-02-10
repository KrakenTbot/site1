import s from './ContactUs.module.css'
import React from 'react'

const ContactUs = () => {
  return (
    <div className={s.container}>
      <h1>Contact Us</h1>
      <div className={s.block}>
        <p>
            <b>PLEASE DO NOT HESITATE</b> to contact us with your questions.
            <br/>
            Our leaders' contact information is available below:
        </p>
        <p>
            <b>Prospective applicants</b> should address questions 
            <br/>
            to:
            <br/>
            Julia Loughlin, Principal of Human Resources
            jloughlin@uchicago.edu
        </p>
        <p>
            <b>Prospective clients</b> should address questions to:
            <br/>
            Walter Wong, Principal of Business Development
            walterwong@uchicago.edu
        </p>
        <p>
            <b>Prospective advisors</b> should address questions to:
            <br/>
            Kevin Qian, Principal of Consulting
            <br/>
            kqian@uchicago.edu
        </p>
        <p>
            <b>Other questions</b>, including inquiries for recruitment of Eckhart members for professional firms should be addressed to:
            <br/>
            Reid Pilch, Managing Director
            <br/>
            dreidpilch@uchicago.edu
        </p>
        <p><b>Prospective clients</b> can fill out an inquiry form <br/>below</p>
      </div>
    </div>
  )
}

export default ContactUs
