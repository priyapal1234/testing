import React from 'react'
import { useRef } from 'react'

const form3 = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const submitted = (e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }
  return (
    <>
    <form onSubmit={submitted}>
        <input type="text" name="name" ref={nameRef} id="" />
        <input type="email" name="email" ref={emailRef} id="" />
        <input type="number" name="phone" ref={phoneRef} id="" />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default form3