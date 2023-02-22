import React from 'react'
import './Experience.css'

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

const Experience = () => {
  // dark mood 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // dark mood //
  return (
    <div className="experience" id='Experience'>
      <div className="achivement">
        <div className="circle" style={darkMode?{color:'black', border:'5px solid var(--orange)'}:{color:''}}>6+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achivement">
        <div className="circle" style={darkMode?{color:'black', border:'5px solid var(--orange)'}:{color:''}}>20+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achivement">
        <div className="circle" style={darkMode?{color:'black', border:'5px solid var(--orange)'}:{color:''}}>5+</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience