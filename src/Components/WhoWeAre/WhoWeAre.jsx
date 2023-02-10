import s from './WhoWeAre.module.css';
import React from 'react'

const WhoWeAre = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <h1>Who We Are</h1>
            <p>
                Eckhart Consulting is a pro-bono strategy and management 
                consulting group at the University of Chicago. Since our founding in 2002, 
                EC has advised a diverse set of non-profit, for-profit, and University 
                clients. Working with professionals from top-tier consulting firms, 
                EC consultants aim to improve the efficiency and effectiveness of clients' 
                operations.
            </p>
            <h2>Work with Us</h2>
            <p>
                We offer clients completely pro-bono strategy and operations consulting, 
                a diverse and talented team of top University of Chicago students, 
                advisors from top-tier management consulting firms, 
                and specialized knowledge of the student demographic.
                <br/>
                <br/>
                If you wish to arrange an engagement, please CONTACT US
            </p>
        </div>
    </div>
  )
}

export default WhoWeAre
