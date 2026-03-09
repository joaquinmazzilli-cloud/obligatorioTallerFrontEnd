import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { getLocalById } from "../services/api"
import { Link } from "react-router-dom"

function LocalDetail(){

const {id} = useParams()

const [local,setLocal] = useState(null)

useEffect(()=>{
cargar()
},[])

async function cargar(){

const data = await getLocalById(id)
setLocal(data)

}

if(!local) return <p>cargando...</p>

return(

<div>

<h1>{local.name}</h1>

<p>direccion: {local.address}</p>
<p>ciudad: {local.city}</p>
<p>zona: {local.zone}</p>
<p>horario: {local.hours}</p>

<p>precio: {local.priceRange}</p>

<p>rating: {local.ratingAverage}</p>

<p>descripcion: {local.description}</p>

<img src={local.photos?.[0]} width="300"/>

<p>
creado por: 
<Link to={`/user/${local.creator.id}`}>
{local.creator.name}
</Link>
</p>

</div>

)

}

export default LocalDetail