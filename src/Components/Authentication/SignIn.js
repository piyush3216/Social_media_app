import React, { useState } from 'react'   
import { useHistory } from "react-router-dom";

import { useSelector } from 'react-redux'; 

function SignIn(props) {
  
  
  let userDetails = useSelector((state) => state.SetTheData.userData);  

  const[email,setEmail] = useState(""); 
  const[password,setPassword] = useState("");  

  let history = useHistory();

  const handleOnSubmit = () =>{
    if(userDetails.some(Element => Element.email === email) && userDetails.some(Element => Element.password === password)){
      history.push("/profile");
      props.setLoggedinUser(email);
   }else{
     alert("Please enter a valid email and password!!")
   }
  }  
  return (  
    <>
      <div className='card d-flex p-5 my-5'>
        <div className="container shadow p-3 mb-5 rounded"style={{width:"30rem",backgroundColor:"lightgray"}}>
          <div className="form-group">
              <label htmlFor="Email">Email address</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
          </div> 
          <button onClick={handleOnSubmit} type="button" className="btn btn-primary my-2">Submit</button> 
        </div> 
      </div>
    </>
  )
     
  
}

export default SignIn