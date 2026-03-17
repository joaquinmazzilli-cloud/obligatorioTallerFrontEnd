import { useState,useEffect } from "react"
import { useNavigate,Link } from "react-router-dom"

function CreateDish(){

const navigate = useNavigate()

const user = JSON.parse(localStorage.getItem("user"))

const [name,setName] = useState("")
const [category,setCategory] = useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState("")
const [city,setCity] = useState("")
const [localName,setLocalName] = useState("")
const [message,setMessage] = useState("")

const [locales,setLocales] = useState([])

useEffect(()=>{

const misLocales = JSON.parse(localStorage.getItem("misLocales")) || []

setLocales(misLocales)

},[])

function crearPlato(e){

e.preventDefault()

if(!name || !category || !localName){

setMessage("Completá los campos obligatorios")
return

}

const nuevoPlato = {

id: Date.now(),

name,
category,
description,
price,
city,
localName,

createdAt: new Date().toISOString(),

creator:{
id:user.id,
name:user.username
},

reviews:[]

}

const platos = JSON.parse(localStorage.getItem("misPlatos")) || []

platos.push(nuevoPlato)

localStorage.setItem("misPlatos",JSON.stringify(platos))

setMessage("Plato creado correctamente 🍽️")

setTimeout(()=>{

navigate("/")

},1200)

}

return(

<div>
<Link to="/">
<button>← Volver al Home</button>
</Link>

<h2>Crear Plato</h2>

<form onSubmit={crearPlato}>

<input
placeholder="Nombre del plato"
onChange={(e)=>setName(e.target.value)}
/>

<textarea
placeholder="Descripción"
onChange={(e)=>setDescription(e.target.value)}
/>

<input
placeholder="Precio"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
placeholder="Ciudad"
onChange={(e)=>setCity(e.target.value)}
/>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="">Categoría</option>
<option value="ENTRADA">Entrada</option>
<option value="PRINCIPAL">Principal</option>
<option value="POSTRE">Postre</option>
<option value="BEBIDA">Bebida</option>
<option value="OTROS">Otros</option>

</select>

<select onChange={(e)=>setLocalName(e.target.value)}>

<option value="">Local gastronómico</option>

{locales.map(local=>(

<option key={local.id} value={local.name}>
{local.name}
</option>

))}

</select>

<button>Crear Plato</button>

</form>

{message && <div className="successBox">{message}</div>}

</div>

)

}

export default CreateDish