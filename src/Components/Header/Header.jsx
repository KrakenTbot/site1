import s from './Header.module.css';
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.linkBlock}>
        <button onClick={() => window.scrollTo({top: 0, behavior:"smooth"})}>Eckhart Consulting</button>
        <button onClick={() => window.scrollTo({top: 740, behavior:"smooth"})}>Who We Are</button>
        <button onClick={() => window.scrollTo({top: 1350, behavior:"smooth"})}>Organization</button>
        <button onClick={() => window.scrollTo({top: 2470, behavior:"smooth"})}>Core Values</button>
        <button onClick={() => window.scrollTo({top: 4160, behavior:"smooth"})}>Our Work</button>
        <button onClick={() => window.scrollTo({top: 5050, behavior:"smooth"})}>Our Team</button>
        <button onClick={() => window.scrollTo({top: 5890, behavior:"smooth"})}>Contact Us</button>
        <button onClick={() => window.scrollTo({top: 6950, behavior:"smooth"})}>Inquiry Form</button>
      </div>
    </div>
  )
}

export default Header
