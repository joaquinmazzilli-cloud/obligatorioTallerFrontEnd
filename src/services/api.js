const API = "https://api-react-taller-production.up.railway.app/api"


export async function loginUser(user,password){

const res = await fetch(`${API}/auth/login`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({user,password})
})

return res.json()

}

export async function registerUser(user,password){

const res = await fetch(`${API}/auth/register`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({user,password})
})

return res.json()

}




export async function getLocales(filters=""){

  const res = await fetch(`${API}/locals${filters}`)
  const data = await res.json()

  return data.items || []

}

export async function getLocalById(id){

  const res = await fetch(`${API}/locals/${id}`)
  const data = await res.json()

  return data

}




export async function getPlatos(filters=""){

  const res = await fetch(`${API}/dishes${filters}`)
  const data = await res.json()

  return data.items || []

}

export async function getPlatoById(id){

  const res = await fetch(`${API}/dishes/${id}`)
  const data = await res.json()

  return data

}




export async function postLocalReview(localId,review,token){

  const res = await fetch(`${API}/locals/${localId}/reviews`,{

    method:"POST",

    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },

    body: JSON.stringify(review)

  })

  return res.json()

}

/* CREAR LOCAL */

export async function createLocal(local,token){

const res = await fetch(`${API}/locals`,{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${token}`
},

body: JSON.stringify(local)

})

return res.json()

}


/* CREAR PLATO */

export async function createDish(dish,token){

const res = await fetch(`${API}/dishes`,{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${token}`
},

body: JSON.stringify(dish)

})

return res.json()

}
  

