import React from "react";
import { Link } from "react-router-dom";
import blood from "./asserts/blood.png";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
// import React from "react";
// import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react";
import axios from "axios";
import DonarPost from "../components/DonarPost";
import { FiMap, FiPhoneCall, FiUser } from "react-icons/fi";

function Donate() {
  //const notify = () => toast("Wow so easy!");
  // const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://bloodito.onrender.com/donate')
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
  console.log(isLoaded);
  const userArray = Array.from(user);
  return (
    <>
    <DonarPost/>
    {isLoaded ? (
      <div className="donar-containers">
      {userArray.map(user => (
    
        <div className="donar-container">
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
        </div>
        ))}
        </div>  
        
      ) : (
        <>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        <Skeleton className="donar-container" style={{height:"100px",width:"100%",borderRadius:"10px"}}/>
        </>
      )}
    
     
    </>
  );
}

export default Donate;
