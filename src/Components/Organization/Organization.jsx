import s from './Organization.module.css';
import React from 'react'
import Image from '../images/business-african-american-man-wear-black-suit-glasses-sitting-office-with-laptop-working-pours-sugar-into-coffee.jpg'

const Organization = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <h1>Our Organization</h1>
            <img src={Image} alt="Image" />
            <p> 
                Eckhart Consulting was founded in 2002 by a group of University of 
                Chicago students seeking to gain experience in approaching strategy 
                consulting cases as undergraduates. Today, EC has grown into one of 
                the premier pre-professional student groups on campus. EC offers 
                University of Chicago students the opportunity to tackle complex projects
                for real clients. Members learn data analysis techniques, build business
                intuition, develop their presentation style, and gain experience interacting 
                with clients.
                <br/>
                <br/>
                Our members also benefit from a 
                wealth of resources. Consultants are 
                exposed to skill development trainings, 
                gain valuable insights from advisors working at 
                professional consulting firms, and have access to a 
                diverse network of EC alumni working in a variety of professional 
                fields.
            </p>
        </div>
    </div>
  )
}

export default Organization
