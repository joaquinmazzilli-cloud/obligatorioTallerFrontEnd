import { useState } from "react"
import { loginUser, registerUser } from "../services/api"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [user,setUser] = useState("")
const [pass,setPass] = useState("")

async function handleLogin(e){

e.preventDefault()

try{

const res = await loginUser(user,pass)

localStorage.setItem("user",JSON.stringify(res))

navigate(`/user/${res.user.id}`)

}catch(error){

console.log(error)
alert("login incorrecto")

}

}

async function handleRegister(){

try{

await registerUser(user,pass)

/* login automático */
const res = await loginUser(user,pass)

localStorage.setItem("user",JSON.stringify(res))

navigate(`/user/${res.user.id}`)

}catch(error){

console.log(error)
alert("registro incorrecto")

}

}

return(

<div className="container">

<h1>Login</h1>

<form onSubmit={handleLogin}>

<input
placeholder="usuario"
value={user}
onChange={(e)=>setUser(e.target.value)}
/>

<input
type="password"
placeholder="password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<button type="submit">
Login
</button>

</form>

<br/>

<button onClick={handleRegister}>
Registrarse
</button>

</div>

)

}

export default Login