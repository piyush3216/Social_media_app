import React, { useState } from 'react'
import {Link} from "react-router-dom"; 

import './Profile.css'

function ProfileWall(props) {
    const userDetails = JSON.parse(localStorage.getItem("user")); 
    const [comment,setComment] = useState("");

    const handleCommentClick = () =>{
        document.getElementById("commenttxt").style = "display:block";
        document.getElementById("comment").value = "";
    }
    
    const index = userDetails.findIndex(el => el.email === props.loggedinUser);  
  return (
      <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Friends</span>
                        </a>
                        {
                            userDetails.map((curEle) => {
                            return(
                                <ul className="list-group" key={curEle.email} id="menu">
                                    <li className="nav-item">
                                        <h6 className='text-info'>{curEle.fname?curEle.fname:"name"} {curEle.lname?curEle.lname:" "}</h6>
                                    </li>
                                </ul>
                            )
                            })
                        }
                        <hr/>
                        <div className="dropdown pb-4">
                            <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://i.imgur.com/9AZ2QX1.jpg" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                <span className="d-none d-sm-inline mx-1">{userDetails[index].fname?userDetails[index].fname:" "} {userDetails[index].lname?userDetails[index].lname:" "}</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">  
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item" href="/signin">Sign out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        <div className="col py-3"> 
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000",height:"200px"}}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: "150px", zIndex: "1"}}/>
                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: "1"}}>
                                            Edit profile
                                        </button>
                                    </div>
                                    <div className="ms-3" style={{marginTop: "130px"}}>
                                        <h5 value="">{userDetails[0].fname} {userDetails[0].lname}</h5>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">253</p>
                                        <p className="small text-muted mb-0">Photos</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">1026</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">478</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                                            <p className="font-italic mb-1">Web Developer</p>
                                            <p className="font-italic mb-1">Lives in Bhopal</p>
                                            <p className="font-italic mb-0">Photographer</p>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="container" style={{width:"1100px"}}>
                                            <div className="col-md-6">
                                                <div className="card">
                                                    <div className="d-flex justify-content-between p-2 px-3">
                                                        <div className="d-flex flex-row align-items-center"> <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt='profile' width="50" className="rounded-circle"/>
                                                            <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">{userDetails[0].fname?userDetails[0].fname:"Name"} {userDetails[0].lname?userDetails[0].lname:" "}</span> <small className="text-primary">Collegues</small> </div>
                                                        </div>
                                                        <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h"></i> </div>
                                                    </div> <img src="https://i.pinimg.com/originals/f0/74/c0/f074c0f81acff74f5ebcfb2dc8787fe8.jpg" alt='profile' className="img-fluid"/>
                                                    <div className="p-2">
                                                        <hr/>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart"></i> <i className="fa fa-smile-o ml-2"></i> </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="comments">
                                                            <div id='commenttxt' style={{display:'none'}}>  
                                                                <div className="d-flex flex-row mb-2"> 
                                                                    <img src="https://i.imgur.com/9AZ2QX1.jpg" alt='profile' width="40" className="rounded-image"/>
                                                                    <div className="d-flex flex-column ml-2"> <span className="name">{userDetails[index].fname?userDetails[index].fname:" "} {userDetails[index].lname?userDetails[index].lname:" "}</span> <small className="comment-text">{comment}</small>
                                                                        <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small></div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            <div className="comment-input d-flex justify-content-around"> 
                                                                <input type="text" id = "comment" onChange={(e) => setComment(e.target.value)} className="form-control"/>
                                                                <button type="button" onClick={handleCommentClick} className="btn btn-info mx-1">Comment</button> 
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
    </>
  )
}

export default ProfileWall