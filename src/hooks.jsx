import React from 'react'
import { useEffect, useState } from 'react'

const hooks = () => {
  const [x, setx] = useState(0);
  useEffect(() => {
    console.log("useEffect")
  }, [x])

  const a = useRef();
  

  return (
  <>
  <form onSubmit={Submit}></form>
  </>

  )
}

export default hooks