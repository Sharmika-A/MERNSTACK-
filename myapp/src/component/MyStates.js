import { useState } from 'react';

export default function Statedemo(props) {
    const[count,setCount] = useState(0);
    return (
        <div className='something'>
           <h1>Count: {count}</h1> 
           <button onClick={() => setCount(count - 1)}>
            Decrement
           </button>
           <button onClick={() => setCount(count + 1)}>
            Increment
           </button>
        </div>
    );
}