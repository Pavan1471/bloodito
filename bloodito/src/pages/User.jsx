import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

function User(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://bloodito.onrender.com/myprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data.email)
        console.log(res.data)
        setUser(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }, []);
return(
  <div>{user.email}</div>
)
}
export default User;
