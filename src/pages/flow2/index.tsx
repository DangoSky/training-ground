import React, { useState, useCallback } from 'react';
const set = new Set();

function Demo() {
  const [count, setCount] = useState(0);

  const changeValue = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  set.add(count);
  console.log('size: ', set.size);

  return(
    <div>
      <p>Hello React Hook</p>
      <p>{count}</p>  
      <button onClick={changeValue}>count++</button>
    </div>
  )
}

export default Demo;
