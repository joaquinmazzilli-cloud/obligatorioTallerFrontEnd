import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import LocalDetail from "./pages/LocalDetail"
import UserProfile from "./pages/UserProfile"
import CreateLocal from "./pages/CreateLocal"
import CreateDish from "./pages/CreateDish"


function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/local/:id" element={<LocalDetail/>}/>

<Route path="/crear-local" element={<CreateLocal/>}/>

<Route path="/crear-plato" element={<CreateDish/>}/>
<Route path="/user/:id" element={<UserProfile />} />

</Routes>

</BrowserRouter>

)

}

export default App