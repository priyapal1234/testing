import React, { use, useState } from 'react'
import "./para.css"

const para = () => {
    const [x, setx] = useState("");
    const saver = (e) => {
        setx(e.target.value)
        let btn = document.querySelector("#reset")
        btn.style.display = "inline-block"
    }
    const reset = () => {
        setx("")
        let input = document.querySelector("input")
        input.value = ""
        let btn = document.querySelector("#reset")
        btn.style.display = "none"
    }

    return (

        <div className='container'>
            <div className='flex'>
                <input type="text" onChange={saver} />

                <button id="reset" style={{ display: "none" }} onClick={reset}>Reset</button>
                <p>Your para is: {x}</p>

            </div>
        </div>
    )
}

export default para