import { useParams,Link } from "react-router-dom"
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

const apiLocales = await getLocales()
const apiPlatos = await getPlatos()

const misLocales = JSON.parse(localStorage.getItem("misLocales")) || []
const misPlatos = JSON.parse(localStorage.getItem("misPlatos")) || []

const todosLocales = [...apiLocales,...misLocales]
const todosPlatos = [...apiPlatos,...misPlatos]

setLocales(todosLocales.filter(l=>String(l.creator?.id)===id))
setPlatos(todosPlatos.filter(p=>String(p.creator?.id)===id))

}

return(

<div>

<Link to="/">
<button>← Volver al Home</button>
</Link>

<h2>Locales</h2>

{locales.map(local=>(

<div key={local.id}>
<Link to={`/local/${local.id}`}>{local.name}</Link>
</div>

))}

<h2>Platos</h2>

{platos.map(plato=>(

<div key={plato.id}>
<h4>{plato.name}</h4>
</div>

))}

</div>

)

}

export default UserProfile