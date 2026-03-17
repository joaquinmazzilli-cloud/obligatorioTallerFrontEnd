import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

function CreateLocal(){

const navigate = useNavigate()
const user = JSON.parse(localStorage.getItem("user"))

const [name,setName] = useState("")
const [city,setCity] = useState("")
const [address,setAddress] = useState("")
const [description,setDescription] = useState("")
const [type,setType] = useState("")
const [priceRange,setPriceRange] = useState("")
const [schedule,setSchedule] = useState("")
const [message,setMessage] = useState("")

function crearLocal(e){

e.preventDefault()

if(!name || !city){
setMessage("Completá los campos obligatorios")
return
}

const nuevoLocal = {

id: Date.now(),
name,
city,
address,
description,
type,
priceRange,
schedule,

creator:{
id:user.id,
name:user.username
},

reviews:[],
ratingAverage:0

}

const locales = JSON.parse(localStorage.getItem("misLocales")) || []
locales.push(nuevoLocal)

localStorage.setItem("misLocales",JSON.stringify(locales))

setMessage("Local creado correctamente 🎉")

setTimeout(()=>{
navigate(`/local/${nuevoLocal.id}`)
},1200)

}

return(

<div>

<Link to="/">
<button>← Volver al Home</button>
</Link>

<h2>Crear Local</h2>

<form onSubmit={crearLocal}>

<input placeholder="Nombre" onChange={e=>setName(e.target.value)} />
<input placeholder="Ciudad" onChange={e=>setCity(e.target.value)} />
<input placeholder="Dirección" onChange={e=>setAddress(e.target.value)} />
<textarea placeholder="Descripción" onChange={e=>setDescription(e.target.value)} />
<input placeholder="Horario" onChange={e=>setSchedule(e.target.value)} />

<select onChange={e=>setType(e.target.value)}>
<option value="">Tipo</option>
<option value="RESTAURANTE">Restaurante</option>
<option value="CAFETERIA">Cafetería</option>
<option value="BAR">Bar</option>
</select>

<select onChange={e=>setPriceRange(e.target.value)}>
<option value="">Precio</option>
<option value="ECONOMICO">Económico</option>
<option value="MEDIO">Medio</option>
<option value="ALTO">Alto</option>
</select>

<button>Crear</button>

</form>

{message && <div className="successBox">{message}</div>}

</div>

)

}

export default CreateLocal