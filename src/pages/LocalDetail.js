import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getLocalById } from "../services/api"

function LocalDetail(){

const { id } = useParams()

const [local,setLocal] = useState(null)
const [rating,setRating] = useState(5)
const [comment,setComment] = useState("")
const [reviews,setReviews] = useState([])

useEffect(()=>{

cargarLocal()

const r = JSON.parse(localStorage.getItem(`reviews_${id}`)) || []
setReviews(r)

},[id])

async function cargarLocal(){

const data = await getLocalById(id)

setLocal(data.item ? data.item : data)

}

function enviarReview(){

const user = JSON.parse(localStorage.getItem("user"))

if(!user){
alert("Tenes que iniciar sesión")
return
}

const username = user.username || user.user?.username

const nuevaReview = {

user:username,
rating,
comment

}

const r = JSON.parse(localStorage.getItem(`reviews_${id}`)) || []

r.push(nuevaReview)

localStorage.setItem(`reviews_${id}`,JSON.stringify(r))

setReviews(r)

alert("Review guardada")

}

if(!local){
return <p>Cargando...</p>
}

return(

<div className="container">

<h1>{local.name}</h1>

<p>Ciudad: {local.city}</p>
<p>Tipo: {local.type}</p>
<p>Precio: {local.priceRange}</p>

<h3>Dejar Review</h3>

<select onChange={(e)=>setRating(e.target.value)}>

<option value="1">⭐</option>
<option value="2">⭐⭐</option>
<option value="3">⭐⭐⭐</option>
<option value="4">⭐⭐⭐⭐</option>
<option value="5">⭐⭐⭐⭐⭐</option>

</select>

<br/>

<textarea
placeholder="comentario"
onChange={(e)=>setComment(e.target.value)}
/>

<br/>

<button onClick={enviarReview}>
Enviar Review
</button>

<h3>Reviews</h3>

{reviews.map((r,i)=>(

<div key={i} className="card">

<p>{r.user}</p>
<p>{"⭐".repeat(r.rating)}</p>
<p>{r.comment}</p>

</div>

))}

</div>

)

}

export default LocalDetail