import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    
const navigate = useNavigate()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [modoRegistro,setModoRegistro] = useState(false)
const [error,setError] = useState("")

function handleSubmit(e){

e.preventDefault()


setError("")



if(username.trim()==="" || password.trim()===""){
setError("Todos los campos son obligatorios")
return
}

const usuarios = JSON.parse(localStorage.getItem("users")) || []

if(modoRegistro){

const existe = usuarios.find(u => u.username === username)

if(existe){
setError("Ese usuario ya existe")
return
}

const nuevoUsuario = {
id: Date.now(),
username: username,
password: password
}

usuarios.push(nuevoUsuario)

localStorage.setItem("users",JSON.stringify(usuarios))
localStorage.setItem("user",JSON.stringify(nuevoUsuario))

navigate("/")

}else{

const usuario = usuarios.find(
u => u.username === username && u.password === password
)

if(!usuario){
setError("Usuario o contraseña incorrectos")
return
}

localStorage.setItem("user",JSON.stringify(usuario))

navigate("/")

}

}

return(

<div className="container">

<h2>{modoRegistro ? "Registro" : "Iniciar Sesión"}</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Usuario"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Contraseña"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
{modoRegistro ? "Registrarse" : "Entrar"}
</button>

</form>

{/* MENSAJE DE ERROR */}

{error !== "" && (

<div className="errorBox">
{error}
</div>

)}

<br/>

<button onClick={()=>setModoRegistro(!modoRegistro)}>
{modoRegistro ? "Ya tengo cuenta" : "Crear cuenta"}
</button>

</div>

)

}

export default Login