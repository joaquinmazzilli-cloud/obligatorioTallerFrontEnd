import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { getLocales,getPlatos } from "../services/api"

function UserProfile(){

const {id} = useParams()

const [locales,setLocales] = useState([])
const [platos,setPlatos] = useState([])

useEffect(()=>{
cargar()
},[])

async function cargar(){

const l = await getLocales()
const p = await getPlatos()

setLocales(l.filter(local => local.creatorId == id))
setPlatos(p.filter(plato => plato.creatorId == id))

}

return(

<div>

<h1>Perfil usuario</h1>

<h2>Locales creados</h2>

{locales.map(local=>(

<div key={local.id}>

<p>{local.name}</p>

</div>

))}

<h2>Platos creados</h2>

{platos.map(plato=>(

<div key={plato.id}>

<p>{plato.name}</p>

</div>

))}

</div>

)

}

export default UserProfile