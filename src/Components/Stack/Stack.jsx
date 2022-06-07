import React from 'react'
import Button from './Button';
import './Button.css';
import './Stack.css';
import data from '../../Data/stack.json';

const Stack = () => {
   const {myStack} = data; 

  return (
    <div id="stack">
        <section className="stack">
          <h1 className="stack-title">My <span translate="no"> Stack</span></h1>
          <div className="stack-btn-container">

             {
              myStack.map(tech =>(
                <Button key={tech.id} btn={tech.technology} icon={tech.icon}/>
                ))
            } 
          </div>
        </section>
    </div>
  )
}

export default Stack