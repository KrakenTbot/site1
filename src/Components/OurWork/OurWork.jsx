import s from './OurWork.module.css';
import React from 'react'
import FirstImage from '../images/marketing-business-lady-striped-shirt-office-with-glasses-desk-working-with-coffee-cup.jpg'
import SecondPage from '../images/busy-business-partners-work-hard-having-great-results-serious-man-has-telephone-conversation.jpg'

const OurWork = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <div className={s.infoBlock}>
                <img src={FirstImage} alt="" />
                <div className={s.textBlock}>
                    <h3>Our Work</h3>
                    <p>
                        Our organization works with a wide variety of clients, 
                        from established Chicago organizations to start-ups just 
                        entering the market.
                    </p>
                </div>
            </div>
            <div className={s.infoBlock}>
                <div className={s.textBlock}>
                    <h3>Case Competition</h3>
                    <p>
                        EACH SPRING Eckhart Consulting and Bain & Company bring a 
                        consulting case competition to students at the University 
                        of Chicago. Previous clients have included Best Western, 
                        the Chicago Transit Authority, and I-GO, a Chicago car 
                        sharing company.
                    </p>
                </div>
                <img src={SecondPage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default OurWork
