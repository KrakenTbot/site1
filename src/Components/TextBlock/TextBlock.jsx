import s from './TextBlock.module.css';
import React from 'react'

const TextBlock = propt => {
  return (
    <div className={s.container}>
      <h1>{propt.h1}</h1>
      <p>{propt.p}</p>
    </div>
  )
}

export default TextBlock
