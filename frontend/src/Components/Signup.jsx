import {useState} from "react";

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password
        }

        fetch("https://mern-crud-lx3w.onrender.com/signup",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Register here</h1>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="text" placeholder="pwd" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Register</button>
    </div>
}

export {Signup}