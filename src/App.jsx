import React from 'react'
import { useState, useEffect } from 'react'
const App = () => {
  const [x, setx] = useState(0);
  useEffect(() => {
    console.log("hello")
  }, [x])
  return (
    <>
      <button onClick={() => setx(x + 1)}>Click Me {x}</button>

    </>
  )
}

export default App