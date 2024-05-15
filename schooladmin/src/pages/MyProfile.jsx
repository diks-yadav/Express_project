import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Profile from "../Profile"
export default function MyProfile() {
    const [firstname,setFirstname] =useState("");
    const [lastname,setLastname] =useState("");

  const email=localStorage.getItem('email');
  const getSpecificUserDetails=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-usersbyemail/${email}`).then((res)=>{
      console.log('Backend response Success:', res);
      if(res.data.status===1){
        console.log("user details",res.data.users.firstname);
        // setName(res.data.data.name);   
        setFirstname(res.data.users.firstname);
        setLastname(res.data.users.lastname);     
      }
      else{
          alert(`${res.data.message}`)
      }
    }).catch((err) => {
      console.log('Backend response failes:', err.message);
    });
  }
  const handleUpdate=()=>{
    // alert("calling handleUpdate function on click")
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user-updatebyEmail/${email}`,{firstname,lastname}).then((res)=>{
        console.log('Backend response Success:', res);
        if(res.data.status===1){
          // setName(res.data.data.name);  
          alert(`${res.data.message}`)
          getSpecificUserDetails();   
        }
        else{
            alert(`${res.data.message}`)
        }
      }).catch((err) => {
        console.log('Backend response failes:', err.message);
      });
  }
useEffect(()=>{
getSpecificUserDetails();
},[email]);
  return (
    <div className='main-panel'>
        <h1>My profile</h1>
        <Profile/>
    <div>
        <label>
            First name
        </label>
        <input type="text" name='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>
    </div>
    <div>
        <label>
            Last name
        </label>
        <input type="text" name='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}></input>
    </div>
    <button className='w-20 ml-20 mt-3 rounded-xl bg-blue-500 text-white p-2' onClick={handleUpdate}>Update</button>
    </div>
  )
}
