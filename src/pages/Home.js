import { useEffect,useState } from "react"
import { getLocales,getPlatos } from "../services/api"
import CardLocal from "../components/CardLocal"
import { Link } from "react-router-dom"

function Home(){

const [locales,setLocales] = useState([])
const [platos,setPlatos] = useState([])

/* FILTROS LOCALES */

const [search,setSearch] = useState("")
const [tipo,setTipo] = useState("")
const [precio,setPrecio] = useState("")
const [ciudad,setCiudad] = useState("")
const [rating,setRating] = useState("")

/* FILTROS PLATOS */

const [platoSearch,setPlatoSearch] = useState("")
const [categoria,setCategoria] = useState("")
const [platoCiudad,setPlatoCiudad] = useState("")
const [platoLocal,setPlatoLocal] = useState("")
const [fecha,setFecha] = useState("")

useEffect(()=>{
cargarDatos()
},[])

async function cargarDatos(){

try{

const l = await getLocales()
const p = await getPlatos()

setLocales(l)
setPlatos(p)

}catch(error){

console.log(error)

}

}

/* FILTRO LOCALES */

const localesFiltrados = locales.filter(local=>{

return(

(local.name || "").toLowerCase().includes(search.toLowerCase()) &&
(tipo==="" || local.type===tipo) &&
(precio==="" || local.priceRange===precio) &&
(ciudad==="" || (local.city || "").toLowerCase().includes(ciudad.toLowerCase())) &&
(rating==="" || local.ratingAverage >= rating)

)

})

/* FILTRO PLATOS */

const platosFiltrados = platos.filter(plato=>{

return(

(plato.name || "").toLowerCase().includes(platoSearch.toLowerCase()) &&
(categoria==="" || plato.category===categoria) &&
(platoCiudad==="" || (plato.city || "").toLowerCase().includes(platoCiudad.toLowerCase())) &&
(platoLocal==="" || (plato.localName || "").toLowerCase().includes(platoLocal.toLowerCase())) &&
(fecha==="" || plato.createdAt?.startsWith(fecha))

)

})

return(

<div className="container">

<h1>Rutas del Sabor</h1>

<Link to="/login">Login</Link>

<h2>Buscar locales</h2>

<input
placeholder="buscar"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
<option value="">tipo</option>
<option value="RESTAURANTE">restaurante</option>
<option value="CAFETERIA">cafeteria</option>
<option value="BAR">bar</option>
<option value="FOOD_TRUCK">food truck</option>
</select>

<select value={precio} onChange={(e)=>setPrecio(e.target.value)}>
<option value="">precio</option>
<option value="ECONOMICO">economico</option>
<option value="MEDIO">medio</option>
<option value="ALTO">alto</option>
</select>

<select value={rating} onChange={(e)=>setRating(e.target.value)}>
<option value="">puntuacion</option>
<option value="1">1+</option>
<option value="2">2+</option>
<option value="3">3+</option>
<option value="4">4+</option>
<option value="5">5</option>
</select>

<input
placeholder="ciudad"
value={ciudad}
onChange={(e)=>setCiudad(e.target.value)}
/>

<h2>Locales</h2>

{localesFiltrados.map(local=>(

<div className="card" key={local.id}>

<CardLocal local={local}/>

</div>

))}

<h2>Buscar platos</h2>

<input
placeholder="buscar plato"
value={platoSearch}
onChange={(e)=>setPlatoSearch(e.target.value)}
/>

<select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
<option value="">categoria</option>
<option value="ENTRADA">entrada</option>
<option value="PRINCIPAL">principal</option>
<option value="POSTRE">postre</option>
<option value="BEBIDA">bebida</option>
<option value="OTROS">otros</option>
</select>

<input
type="date"
value={fecha}
onChange={(e)=>setFecha(e.target.value)}
/>

<input
placeholder="ciudad"
value={platoCiudad}
onChange={(e)=>setPlatoCiudad(e.target.value)}
/>

<input
placeholder="local"
value={platoLocal}
onChange={(e)=>setPlatoLocal(e.target.value)}
/>

<h2>Platos</h2>

{platosFiltrados.map(plato=>(

<div className="card" key={plato.id}>

<h4>{plato.name}</h4>

<p>categoria: {plato.category}</p>

<p>local: {plato.localName}</p>

<p>ciudad: {plato.city}</p>

<p>fecha: {plato.createdAt}</p>

</div>

))}

</div>

)

}

export default Home