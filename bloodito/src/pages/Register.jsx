import React from "react";
// import plus from "./plus.png";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hii");
    // console.log(mobile);
    try {
      const response = await axios.post("https://bloodito.onrender.com/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
    setTimeout(() => {
      navigate("/login");
  }, 2000);
  };
  return(
    <>
      <center>
      <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"
             value={firstname}
             onChange={(e) => setFirstname(e.target.value)}></input>

            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"
             value={lastname}
             onChange={(e) => setLastname(e.target.value)}></input>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"
         value={email}
         onChange={(e) => setEmail(e.target.value)}></input>
        <span>Email</span>
    </label> 
        
    <label>
    <input required="" placeholder="" type="password" class="input"
    value={password}
         onChange={(e) => setPassword(e.target.value)} ></input>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"></input>
        <span>Confirm password</span>
    </label>
    <button onClick={handleSubmit} class="submit">Register</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
      </center>
    </>
  )
}
export default Register;
