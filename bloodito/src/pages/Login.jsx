import React from "react";
// import plus from "./plus.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(""); // state to store the user ID

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user", {
        email: email,
        password: password,
      });
      console.log(response.status);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      // set the userID variable after the axios request is completed
      const user = response.data.id;

      if (localStorage.getItem("token")) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(userID);
  }, [userID]);

  console.log(userID);
  return (
    <>
     <center>
     <form class="form">
        <p class="title">Login</p>
        <p class="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            class="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <span>Email</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            class="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span>Password</span>
        </label>
        <button onClick={handleSubmit} class="submit">
          Login
        </button>
        <p class="signin">
          Didn't have an acount ? <a href="#">SignUp</a>{" "}
        </p>
      </form>
     </center>
    </>
  );
}
export default Login;
