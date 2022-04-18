import React from 'react'
import './Button.css';

const Button = ({btn, icon}) => {
  return (
    <div>
      <button className="button">
        {btn}
       {icon} 
      </button>

    </div>
  )
}

export default Button