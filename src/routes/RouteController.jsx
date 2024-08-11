import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"


const Home = lazy(() => import("./home/Home"))
const Auth = lazy(() => import("./auth/Auth"))
const ProductsDetails = lazy(()=> import("./products-details/ProductsDetails"))

const Login = lazy(() => import("./auth/login/Login"))
const Register = lazy(() => import("./auth/register/Register"))




const RouteController = () => {
  return (
   <Suspense fallback={<div >Loading...</div>}>
     <Routes>
        <Route path="" element= {<Home/>} />
        <Route path="/auth" element={<Auth/>}>
          <Route path="login" element= {<Login/>}/>
          <Route path="register" element= {<Register/>}/>
        </Route>

            <Route path="/product-details/:id"element={<ProductsDetails/>} />
    </Routes>
   </Suspense>
  )
}
  
export default RouteController