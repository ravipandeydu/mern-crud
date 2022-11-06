import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./Components/Home"
import {Login} from "./Components/Login"
import {Signup} from "./Components/Signup"
import { Todos } from './Components/Todos';


function App() {
  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/todos" element={<Todos />}/>
        </Routes>
    </div>
  );
}

export default App;
