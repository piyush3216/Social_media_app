import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProfileWall from "./Components/ProfileWall";
import SignIn from "./Components/SignIn";
import SignUpForm from "./Components/SignUpForm";
import Navbar from "./Components/Navbar";

function App() {
  const[loggedinUser,setLoggedinUser] = useState("");   
  return (
    <>
      <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/profile">
              <ProfileWall loggedinUser={loggedinUser}/>
            </Route>
            <Route exact path="/signin">
              <SignIn setLoggedinUser={setLoggedinUser}/> 
            </Route>
            <Route exact path="/">
              <SignUpForm/>
            </Route> 
          </Switch>
      </Router> 
    </>
  );
}

export default App;
