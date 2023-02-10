import s from './CliendInjuriForm.module.css'
import React from 'react'

const CliendInjuriForm = () => {
  return (
    <div className={s.container}>
        <h1>Client Inquiry Form</h1>
        <p>Please fill out the following form and we will respond as soon as possible.</p>
      <div className={s.block}>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <input type="submit" value='Submit'/>
      </div>
    </div>
  )
}

export default CliendInjuriForm
