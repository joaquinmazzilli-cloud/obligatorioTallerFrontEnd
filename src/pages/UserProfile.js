
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getLocales,getPlatos } from "../services/api"

function UserProfile(){

const { id } = useParams()

const [locales,setLocales] = useState([])
const [platos,setPlatos] = useState([])

useEffect(()=>{
cargar()
},[])

async function cargar(){

const l = await getLocales()
const p = await getPlatos()

const localesUsuario = l.filter(local=>local.creator?.id == id)
const platosUsuario = p.filter(plato=>plato.creator?.id == id)

setLocales(localesUsuario)
setPlatos(platosUsuario)

}

return(

<div className="container">

<h1>Perfil de Usuario</h1>

<h2>Locales creados</h2>

{locales.map(local=>(

<div className="card" key={local.id}>

<h3>{local.name}</h3>

<p>{local.city}</p>

</div>

))}

<h2>Platos creados</h2>

{platos.map(plato=>(

<div className="card" key={plato.id}>

<h3>{plato.name}</h3>

<p>{plato.category}</p>

</div>

))}

</div>

)

}

export default UserProfile