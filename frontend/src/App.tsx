


import { BrowserRouter, Route , Routes } from "react-router"
import Home from "./components/comon/Home"
import Shop from "./components/comon/Shop"
import Prodcuts from "./components/comon/Prodcuts"


function App() {
  return (
     
    <>
      <BrowserRouter>
        
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/shop" element={<Shop/>}/>
            <Route path="/product" element={<Prodcuts/>}/>
         </Routes>

      </BrowserRouter>
    </>

  )
}

export default App