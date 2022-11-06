import {useState, useEffect} from "react";

function Todos(){
    const [todos, setTodos] = useState([])
    const token = localStorage.getItem("token")
    const getData = () => {
        fetch("https://mern-crud-lx3w.onrender.com/notes", {
            method : "GET",
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => setTodos(res))
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    if(!localStorage.getItem("token")){
        return <h1>Please login again</h1>
    }
    return <div>
        <h1>Todos here</h1>
        {
            todos.length > 0 && todos.map((todo, index) => {
                return <div key={index}>
                    <p>{todo.Title}</p>
                    <p>{todo._id}</p>
                    <p>{todo.userId}</p>
                    <button>DELETE</button>
                </div>
            })
        }
    </div>
}

export {Todos}
