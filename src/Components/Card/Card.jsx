import React from 'react'

const Card = ({title, icon, text}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    </div>
  )
}

export default Card