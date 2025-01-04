'use client';
import { useState } from 'react';

//rafce
const Counter = () => {
  const [count, setCout] = useState(0);
  console.log('hello')
  return (    
    <>
    <p>Counter
     page</p> 
    <div className='text-7xl gap-8'>      
      <button onClick={() => setCout(count - 1)}> -  </button> 
      {count}
      <button onClick={() => setCout(count + 1)}> + </button>
    </div>
    </>
    
  )
}

export default Counter