import { useState } from "react"

function CreateLocal(){

const [name,setName] = useState("")
const [city,setCity] = useState("")
const [address,setAddress] = useState("")

function crear(){

alert("local creado (simulado)")

}

return(

<div>

<h1>Crear local</h1>

<input
placeholder="nombre"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="ciudad"
onChange={(e)=>setCity(e.target.value)}
/>

<input
placeholder="direccion"
onChange={(e)=>setAddress(e.target.value)}
/>

<button onClick={crear}>
crear
</button>

</div>

)

}

export default CreateLocal