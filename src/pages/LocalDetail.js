import { useEffect,useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getLocalById } from "../services/api"

function LocalDetail(){

const { id } = useParams()

const [local,setLocal] = useState(null)

useEffect(()=>{
cargarLocal()
},[id])

async function cargarLocal(){

try{

const data = await getLocalById(id)

/* algunas APIs devuelven item */
const localData = data.item ? data.item : data

setLocal(localData)

}catch(error){

console.log(error)

}

}

if(!local){
return <p>Cargando local...</p>
}

return(

<div className="container">

<h1>{local.name || "Sin nombre"}</h1>

<p>Ciudad: {local.city || "No disponible"}</p>

<p>Tipo: {local.type || "No disponible"}</p>

<p>Precio: {local.priceRange || "No disponible"}</p>

<p>Rating: {local.ratingAverage || "Sin rating"}</p>

{local.creator && (
<p>
Creado por: 
<Link to={`/user/${local.creator.id}`}>
{local.creator.name}
</Link>
</p>
)}

</div>

)

}

export default LocalDetail