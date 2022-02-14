import React, { useState } from 'react'  
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const[email,setEmail] = useState(""); 
  const[password,setPassword] = useState("");
  const[link,setLink] = useState("/signin");   
  const userDetails = JSON.parse(localStorage.getItem("user"));

  let history = useHistory();

  const handleOnSubmit = () =>{
    if(userDetails.some(el => el.email === email) && userDetails.some(el => el.password === password)){
      history.push("/profile");
      props.setLoggedinUser(email);
   }else{
     alert("Please enter a valid email and password!!")
   }
  }  
  return (  
    <>
      <div className='row my-5' style={{backgroundImage: "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80')"}}>
        <div className="col-md-6 mx-auto">
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