
import { useState } from "react"
import { createLocal } from "../services/api"

function CreateLocal(){

const [name,setName] = useState("")
const [city,setCity] = useState("")
const [type,setType] = useState("")
const [priceRange,setPriceRange] = useState("")

async function guardarLocal(e){

e.preventDefault()

try{

const user = JSON.parse(localStorage.getItem("user"))

if(!user){
alert("Tenes que iniciar sesión")
return
}

const token = user.token

const local = {
name,
city,
type,
priceRange
}

const res = await createLocal(local,token)

console.log(res)

alert("Local creado correctamente")

setName("")
setCity("")
setType("")
setPriceRange("")

}catch(error){

console.log(error)

alert("Error al crear el local")

}

}

return(

<div className="container">

<h1>Crear Local</h1>

<form onSubmit={guardarLocal}>

<input
placeholder="Nombre del local"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
placeholder="Ciudad"
value={city}
onChange={(e)=>setCity(e.target.value)}
required
/>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
required
>
<option value="">Tipo</option>
<option value="RESTAURANTE">Restaurante</option>
<option value="CAFETERIA">Cafeteria</option>
<option value="BAR">Bar</option>
<option value="FOOD_TRUCK">Food Truck</option>
</select>

<select
value={priceRange}
onChange={(e)=>setPriceRange(e.target.value)}
required
>
<option value="">Precio</option>
<option value="ECONOMICO">Economico</option>
<option value="MEDIO">Medio</option>
<option value="ALTO">Alto</option>
</select>

<button type="submit">
Crear Local
</button>

</form>

</div>

)

}

export default CreateLocal