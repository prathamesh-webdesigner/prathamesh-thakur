import React from 'react'
import './Toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

const Toggle = () => {

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }
    // dark mood //


    return (
        <div className="toggle"
            onClick={handleClick}
        >
            <Moon />
            <Sun />
            <div className="t-button"
                style={darkMode ? { left: '2px' } : { right: '2px' }}
            >

            </div>
        </div>
    )
}

export default Toggle