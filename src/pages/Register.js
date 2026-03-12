import { useState } from "react";
import { registerUser } from "../services/api";

function Register() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser({
        username,
        password
      });

      alert("Usuario creado");

    } catch {

      alert("Error creando usuario");

    }

  };

  return(

    <form onSubmit={handleSubmit}>

      <input
        placeholder="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button>Register</button>

    </form>

  );
}

export default Register;