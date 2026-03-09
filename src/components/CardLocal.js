import { Link } from "react-router-dom"

function CardLocal({ local }) {

  return (
    <div style={{border:"1px solid #741ef6ff",padding:"10px",margin:"10px"}}>

      <h3>{local.name}</h3>

      <p>Tipo: {local.type}</p>

      <p>Precio: {local.priceRange}</p>

      <p>Ciudad: {local.city}</p>

      <Link to={`/local/${local.id}`}>
        Ver detalle
      </Link>

    </div>
  )
}

export default CardLocal