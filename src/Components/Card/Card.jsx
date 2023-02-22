import React from 'react'
import './Card.css'
import { Link } from 'react-scroll';

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

const Card = ({ emoji, heading, detail }) => {
  // dark mood
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  // dark mood //
  return (
    <div className="card" style={darkMode ? { background: 'white' } : { background: '' }}>
      <img src={emoji} alt="" />
      <span style={darkMode ? { color: 'black' } : { color: '' }}>{heading}</span>
      <span style={darkMode ? { color: 'black' } : { color: '' }}>{detail}</span>
      <Link spy={true} smooth={true} to='Contact'>
        <button className='c-button'>Learn More</button>
      </Link>
    </div>
  )
}

export default Card