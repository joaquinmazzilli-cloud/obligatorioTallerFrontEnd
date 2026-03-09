import { useState } from "react"

function CreateDish(){

const [name,setName] = useState("")
const [category,setCategory] = useState("")

function crear(){

alert("plato creado")

}

return(

<div>

<h1>Crear plato</h1>

<input
placeholder="nombre"
onChange={(e)=>setName(e.target.value)}
/>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="ENTRADA">entrada</option>
<option value="PRINCIPAL">principal</option>
<option value="POSTRE">postre</option>
<option value="BEBIDA">bebida</option>
<option value="OTROS">otros</option>

</select>

<button onClick={crear}>
crear plato
</button>

</div>

)

}

export default CreateDish