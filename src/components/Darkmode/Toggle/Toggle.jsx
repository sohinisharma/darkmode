import React from 'react'
import './Toggle.css'

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
                <input type="checkbox" name="" id="check"
                className="toggle"  onChange={handleChange}
                Checked={isChecked}/>
                <label htmlFor="check">Dark mode</label>
        </div>
    )
}

export default Toggle
