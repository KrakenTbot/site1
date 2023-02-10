import s from './CoreValues.module.css';
import React from 'react'
import TextBlock from '../TextBlock/TextBlock';
import Megafone from '../icons/megaphone.png'
import Chart from '../icons/chart.png'
import Bag from '../icons/portfolio.png'
import magnifyingGlass from '../icons/search.png'

const CoreValues = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <div className={s.leftBlock}>
                <TextBlock 
                    h1='Community' 
                    p="Though at its heart Eckhart 
                    Consulting aims to help its members gain pre-professional 
                    experience in the field of consulting, EC has always striven 
                    to give back to the local Chicago community through its work. 
                    Many of our clients, large and small, are local to the Chicagoland 
                    area. When choosing cases, Eckhart's principals give great weight 
                    to the impact our work can have on the Chicago community. Furthermore, 
                    we play an active role in the University of Chicago community, 
                    taking on a project each academic quarter for the University's 
                    administration. With our projects, Eckhart Consulting's members seek to 
                    contribute valuable insights to the communities in which we participate.
                "/>
                <TextBlock 
                    h1='Professionalism' 
                    p="We maintain the highest standards of professionalism and 
                    excellence in all of our projects. With the help of our advisors, 
                    Eckhart members learn to conduct business in a professional, client 
                    oriented manner, gain an understanding of industry best-practices, 
                    and perform honest analysis for clients. Through an extensive 
                    training program and hands-on mentorship, new consultants quickly 
                    learn to contribute valuable insights for their projects. As a whole, 
                    Eckhart teams work tirelessly to add value to our clients' firms. 
                "/>
                <TextBlock 
                    h1='Pro-Bono Service' 
                    p="Eckhart Consulting is committed to providing affordable and 
                    pro-bono services to our clients. While our for-profit clients 
                    pay a small fee to cover our operating costs, we provide our 
                    consulting services to our non-profit and University clients 
                    free of charge. Through this commitment, Eckhart Consulting is 
                    able to take on engagements with the highest possible impact 
                    for our community. 
                "/>
                <TextBlock 
                    h1='Dedication' 
                    p="Our members are incredibly dedicated to our clients' projects. 
                    Consultants typically work 5-7 hours per week evaluating clients' 
                    organizations, collecting and analyzing data, and formulating 
                    recommendations.

                    Our consultants represent the top, most ambitious undergraduate 
                    talent at the University of Chicago: each member must complete a 
                    difficult application process consisting of a written application 
                    and two rounds of interviews. Typically, we accept fewer than 10% 
                    of applicants. Our intensive screening process allows us to offer 
                    clients the highest possible quality of service. 
                "/>
            </div>
            <div className={s.rightBlock}>
                <img src={Megafone} alt="" />
                <img src={Chart} alt="" />
                <img src={Bag} alt="" />
                <img src={magnifyingGlass} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CoreValues
