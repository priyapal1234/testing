import React from 'react'
import { useState } from 'react'

const form2 = () => {
    const [formsetter, setformsetter] = useState(
        {
            name: "",
            email: "",
            phone: ""
        }
    )
    const submitted = (e) => {
        e.preventDefault();
        console.log(formsetter.name)
        console.log(formsetter.email)
        console.log(formsetter.phone)
    }
    return (
        <>
            <form onSubmit={submitted}>
                <input type="text" onChange={(e) => setformsetter({ ...formsetter, name: e.target.value })} name="name" placeholder='Enter your name' id="" />
                <input type="email" onChange={(e) => setformsetter({ ...formsetter, email: e.target.value })} name="email" placeholder='Enter your email' id="" />
                <input type="number" onChange={(e) => setformsetter({ ...formsetter, phone: e.target.value })} name="phone" placeholder='Enter your phone number' id="" />
                <button type="submit">Submit</button>
            </form>


        </>


    )
}

export default form2