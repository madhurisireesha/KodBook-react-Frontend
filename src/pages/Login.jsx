import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/login.css'
const Login = () => {
  const[username,setUserName]=useState('')
  const[password,setPassword]=useState('')
  const[invalid,setInvalid]=useState(false)
  const[empty,setEmpty]=useState(false)
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault()
	  if(username==='' || password==='')
		{
		  setEmpty(true)
		}
		e.preventDefault();
      const resp = await axios.post('http://localhost:8080/login', {username, password});
      if(resp.data === "valid") {
        navigate('/home');
        alert("login successfull");
      }
      else{
        navigate('/');
        alert("login not successfull, try again");
      }
		
	  setUserName('')
	  setPassword('')   
  }
  
 
  return (
   
    <div className="indexcontainer">
			<div class="title">
				<div>
				<img src="https://static.vecteezy.com/system/resources/thumbnails/003/654/555/small_2x/k-letter-logo-icon-for-business-and-company-vector.jpg" className="logo" alt="lofo"/></div><div><h1 class="titext">OD BOOK</h1></div>
			</div>
				<form onSubmit={handleSubmit} method="post" class="formcontainer">
				<div className="labeltext">
					<h3><label>USERNAME : </label></h3><br/>
					<input type="text" name="username" value={username}
          onChange={(e)=>{setUserName(e.target.value)}}/>
				</div>
				{invalid&&<h3  style={{color:"red"}}>Invalid Username</h3>}
				{empty&&<h3  style={{color:"red"}}>Username is required</h3>}<br/><br/>
				<div className="labeltext">
				<h3><label>PASSWORD : </label></h3><br/>
				<input type = "password" name = "password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
				</div>{invalid&&<h3 style={{color:"red"}}>Invalid Password</h3>}
				{empty&&<h3  style={{color:"red"}}>Password is required</h3>}<br/>
			<br/>
			<div className="labeltext">
			<input type="submit" value = "LOGIN" class="but"/>
			</div>
			<div className="labeltext">
			<a href = "/openResetPassword" title="forgot password">Forgot password?</a>
			
      <Link to="/openSignUp">Create New Account</Link>
      
			</div>
			</form>			
		</div>
   
  )
}

export default Login
