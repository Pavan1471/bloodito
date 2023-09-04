import React from "react";
import { Link } from "react-router-dom";
import blood from "./asserts/blood.png";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
// import React from "react";
// import "./App.css";
import { useState,useEffect } from "react";
import axios from "axios";
import DonarPost from "../components/DonarPost";
import { FiMap, FiPhoneCall, FiUser } from "react-icons/fi";

function Donate() {
  // const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.get('http://localhost:5000/donate')
      .then(res => {
        console.log(res.data)
        setUser(res.data);
        // setIsLoaded(false); 
        setIsLoaded(true) // set loading to false after fetching the data
      })
      .catch(err => {
        // Handle the error here (for example, show a toast notification)
        // toast.error("Error fetching user data!"); 
        // setIsLoaded(false); 
        setIsLoaded(true)// even if there's an error, we should set loading to false
      });
  }, []);
  const userArray = Array.from(user);
  return (
    <>
    <DonarPost/>
    <div className="donar-containers">
    {userArray.map(user => (
  
      <Skeleton isLoaded={isLoaded} className="donar-container">
         {/* <div className="donar-container"> */}
         <div className="blood-group">
           <img className="blood-img" src={blood}></img>
           <div>{user.bloodtype}</div>
         </div>
         <div>
           <div className="blood-info">
             <FiPhoneCall />
             <div className="donar-name">{user.mobilenumber}</div>
           </div>
           <div className="blood-info">
             <FiUser />
             <div className="donar-name">{user.name}</div>
           </div>
           <div className="blood-info">
             <FiMap />
             <div className="donar-name">{user.address}</div>
           </div>
         </div>
       {/* </div> */}
      </Skeleton>
      ))}
      </div>   
    </>
  );
}

export default Donate;
