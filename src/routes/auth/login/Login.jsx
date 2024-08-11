import { useState } from "react"
import "../Auth.css"
import axios from "../../../api"
import { useNavigate } from "react-router-dom"

import avatar from "../../../images/avatar1.svg"

const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  // const [form] = Form.useForm() form tazalaydigan funksiya ishlamadi
  
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try { 
      const res = await axios.post("/auth/login",
      {
        username: name,
        password : password
      })
      console.log(res)
      if(res?.data){
        localStorage.setItem("x-auth-token", res?.data?.token)
        navigate("/")
      }
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="login__container"> 
    
      <form onSubmit={handleFormSubmit} className='form__content'>
      <h2 className="login_title">Login</h2>
      
        
        <input  className="inputs" onChange={(e) => setName(e.target.value)}  type="text" placeholder='Enter username' />
        <input className="inputs" onChange= {(e) => setPassword(e.target.value)} type="text" placeholder='Enter password' />
        <button className="btn" type='submit'>loading</button>
        <img className="avatar" src={avatar} alt="" />
      </form>
    </div>
  )
}

export default Login