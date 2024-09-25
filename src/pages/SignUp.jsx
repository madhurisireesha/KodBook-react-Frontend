import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // React Router hook
import '../styles/signup.css'
export default function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const handleGender = (e) => {
    setGender(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const resp = await axios.post('http://localhost:8080/signUp',
    {username, email, password, dob, gender});
    console.log(resp);
  }
  return (
    <>
     
      <div class="signupcontainer">
		<div class="title">
			<div>
				<img src="https://static.vecteezy.com/system/resources/thumbnails/003/654/555/small_2x/k-letter-logo-icon-for-business-and-company-vector.jpg" class="logo"/></div><div><h1 class="titext">OD BOOK</h1>
			</div>
		</div>
		<div class="signup">
		<form onSubmit={handleSubmit} class="formcontainer">
		<h2>Sign Up Form:</h2>
			<div class="labeltext">			
			<label>USERNAME:</label>
			<input type="text" name="username" 
			value={username}
			onChange={(e)=>{setUsername(e.target.value)}}
			className="uname"/>
			</div>
		<div class="labeltext">
			<label>EMAIL:</label>
			<input type="email" name="email"  value={email}
          onChange={(e)=>{setEmail(e.target.value)}} className="uname"/>
		</div>
		<div class="labeltext">
			<label>PASSWORD:</label>
			<input type="password" name="password" className="uname"
			 value={password}
			 onChange={(e)=>{setPassword(e.target.value)}}/>
		</div>
		<div class="labeltext">
			<label>DOB:</label>
			<input type="date" name="dob" className="uname" value={dob}
          onChange={(e)=>{setDob(e.target.value)}}/>
		</div>
		<label>GENDER:</label><br/>
		<div>
			
			<label>Male</label><input type="radio" name="gender" value="M"
            checked={gender==="M"} onChange={handleGender}/>
			<label>Female</label><input type="radio" name="gender"
			 value="F"
			 checked={gender==="F"}
			 onChange={handleGender}/>
			<label>Others</label><input type="radio" name="gender"
			 value="O"
			 checked={gender==="O"}
			 onChange={handleGender}/>
		</div>
		<div>
			<input type="submit" value="SIGN UP" className="but"/>
		</div>
		<NavLink to="/">Already a user? Login instead</NavLink>
		</form>
		</div>
			
	</div>
      
    </>
  );
}