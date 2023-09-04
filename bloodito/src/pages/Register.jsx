import React from "react";
// import plus from "./plus.png";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, Spinner } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // console.log("hii");
    // console.log(mobile);
    try {
      const response = await axios.post("https://bloodito.onrender.com/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      console.log(response.data);
      toast.success("Registration successful");
     
    } catch (error) {
      console.error("Error:", error.response.data);
      toast.error("Registration not successful");
    }
    finally{
      setIsLoading(false);
    }
    navigate("/login");
  };
  return(
    <>
    <ToastContainer />
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
    <button onClick={handleSubmit} class="submit">
    <div>
    {isLoading ? <div><Spinner/></div> : (
      <div>Register</div>
    )}
  </div>
    </button>
    <p class="signin">Already have an acount ? <a onClick={()=>{
             navigate("/login");
          }} href="#">Login</a> </p>
</form>
      </center>
    </>
  )
}
export default Register;
