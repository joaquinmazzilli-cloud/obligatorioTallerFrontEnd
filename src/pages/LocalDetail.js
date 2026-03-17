import { useEffect,useState } from "react"
import { useParams,Link } from "react-router-dom"
import { getLocales } from "../services/api"

function LocalDetail(){

const { id } = useParams()

const [local,setLocal] = useState(null)
const [rating,setRating] = useState(5)
const [comment,setComment] = useState("")
const [reviews,setReviews] = useState([])
const [message,setMessage] = useState("")

useEffect(()=>{

cargarLocal()

const r = JSON.parse(localStorage.getItem(`reviews_${id}`)) || []
setReviews(r)

},[id])

async function cargarLocal(){

const apiLocales = await getLocales()
const misLocales = JSON.parse(localStorage.getItem("misLocales")) || []

const todos = [...apiLocales,...misLocales]

const encontrado = todos.find(l=>String(l.id)===id)

setLocal(encontrado)

}

/* FORMATEAR FECHA */
function formatearFecha(fechaISO){

const fecha = new Date(fechaISO)

return fecha.toLocaleDateString("es-UY",{
day:"2-digit",
month:"2-digit",
year:"numeric"
})

}

function enviarReview(){

setMessage("")

const user = JSON.parse(localStorage.getItem("user"))

if(!user){
setMessage("Tenés que iniciar sesión")
return
}

const username = user.username || user.user?.username

const nuevaReview = {

user:username,
rating:Number(rating),
comment,
date:new Date().toISOString()

}

const r = JSON.parse(localStorage.getItem(`reviews_${id}`)) || []

r.push(nuevaReview)

localStorage.setItem(`reviews_${id}`,JSON.stringify(r))

setReviews(r)

setMessage("Review guardada ⭐")

setComment("")
setRating(5)

}

if(!local){
return <p>Cargando...</p>
}

return(

<div className="container">

{/* BOTON VOLVER */}
<Link to="/">
<button>← Volver al Home</button>
</Link>

<h1>{local.name}</h1>

<p>{local.description}</p>
<p>Ciudad: {local.city}</p>
<p>Dirección: {local.address}</p>
<p>Horario: {local.schedule}</p>
<p>Tipo: {local.type}</p>
<p>Precio: {local.priceRange}</p>

{/* FORM REVIEW */}

<h3>Dejar Review</h3>

<select value={rating} onChange={(e)=>setRating(e.target.value)}>

<option value="1">⭐</option>
<option value="2">⭐⭐</option>
<option value="3">⭐⭐⭐</option>
<option value="4">⭐⭐⭐⭐</option>
<option value="5">⭐⭐⭐⭐⭐</option>

</select>

<br/>

<textarea
placeholder="comentario"
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<br/>

<button onClick={enviarReview}>
Enviar Review
</button>

{/* MENSAJE LINDO */}

{message && <div className="successBox">{message}</div>}

{/* REVIEWS */}

<h3>Reviews</h3>

{reviews.map((r,i)=>(

<div key={i} className="card">

<p><strong>{r.user}</strong></p>
<p>{"⭐".repeat(r.rating)}</p>
<p>{r.comment}</p>

{r.date && (
<p style={{fontSize:"12px"}}>
{formatearFecha(r.date)}
</p>
)}

</div>

))}

</div>

)

}

export default LocalDetail