import { useState, useRef } from "react"
const form = () => {
    // const [formData, setFormData] = useState(
    //     {
    //         name: "",
    //         email: ""
    //     }
    // );

    // const submitted = (e) => {
    //     e.preventDefault();
    //     console.log(formData.name)
    //     console.log(formData.email)
    // }
    const nameRef = useRef("divyam")
    const emailRef = useRef("hello")

    const submitted = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)

    return (
        <>
            <form onSubmit={submitted}>
                <input type="text" ref={nameRef} placeholder='Enter your name' />
                <input type="email" name="email" id="" ref={emailRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default form