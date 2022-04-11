import React from 'react'
import Button from './Button';
import './Stack.css';
import data from '../../Data/stack.json';

const Stack = () => {
  const {myStack} = data;
  return (
    <div>
        <section className="stack">
          <h1 className="stack-title">My <span>Stack</span></h1>
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