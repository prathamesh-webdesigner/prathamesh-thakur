import React from 'react'
import './Floating.css'

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

function FloatingDiv({ image, txt1, txt2 }) {

  // dark mood
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  // dark mood //

  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span style={darkMode?{color:'black'}:{color:''}}>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv