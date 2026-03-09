import { useState } from "react"
import { postLocalReview } from "../services/api"

function ReviewForm({ localId }) {

  const [rating,setRating] = useState(5)
  const [comment,setComment] = useState("")

  const enviarReview = async (e) => {

    e.preventDefault()

    await postLocalReview(localId,{
      rating,
      comment
    })

    alert("Review enviada")
    setComment("")
  }

  return (

    <form onSubmit={enviarReview}>

      <h3>Agregar review</h3>

      <select
      value={rating}
      onChange={(e)=>setRating(e.target.value)}
      >
        <option value="1">1 estrella</option>
        <option value="2">2 estrellas</option>
        <option value="3">3 estrellas</option>
        <option value="4">4 estrellas</option>
        <option value="5">5 estrellas</option>
      </select>

      <textarea
      placeholder="comentario"
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      />

      <button>Enviar</button>

    </form>
  )
}

export default ReviewForm