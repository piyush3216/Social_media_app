import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom"; 

function SignUpForm() { 
   const [userDetails,setUserDetails]=useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    password:""
});
//for creating array of object
   const[data,setData]=useState([]); 
   let name,value;
   const handleOnchange = (event) =>{
    name = event.target.name;
    value = event.target.value; 
    setUserDetails({...userDetails,[name]:value}); 
  }
  
//   Add Data to localStorage
   useEffect(() =>{
     localStorage.setItem('user',JSON.stringify(data)); 
   },[data])

  const handleOnSubmit = () =>{
    setData([...data,userDetails]);
    setUserDetails({
      fname:"",
      lname:"",
      email:"",
      mobile:"",
      password:""
    })
  } 
  return (
    <>
      <div className="container text-light my-3">
        <div className="container" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80')"}}> 
         
            <div className="form-group ">
                <label htmlFor="first name">First Name</label>
                <input type="text" className="form-control" name="fname" value={userDetails.fname} onChange={handleOnchange} placeholder="First Name"/>
                <small className="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="last name">Last Name</label>
                <input type="text" className="form-control" name="lname" value={userDetails.lname} onChange={handleOnchange} placeholder="Last Name"/>
                <small className="form-text text-muted">We'll never share your last name with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="form-control" name="email" value={userDetails.email} onChange={handleOnchange} placeholder="Enter email"/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="Mobile">Contact Number</label>
                <input type="mobile" className="form-control" name="mobile" value={userDetails.mobile} onChange={handleOnchange} placeholder="Enter Mobile Number"/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" name="password" value={userDetails.password} onChange={handleOnchange} placeholder="Password"/>
            </div>  
            <button onClick={handleOnSubmit} className="btn btn-primary my-2">Submit</button> 
            <Link to="signin"><button type="signin" className="btn btn-primary my-2 mx-2">Sign In</button></Link>
          
        </div>
      </div>  
    </>
  )
}

export default SignUpForm