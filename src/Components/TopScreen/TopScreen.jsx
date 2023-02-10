import s from './TopScreen.module.css'
import React from 'react'

const TopScreen = () => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <div className={s.imageblock}></div>
        <div className={s.textBlock}>
          <p>Student-Driven Strategy Consulting</p>
          <h1>Eckhart Consulting</h1>
        </div>
      </div>
    </div>
  )
}

export default TopScreen
