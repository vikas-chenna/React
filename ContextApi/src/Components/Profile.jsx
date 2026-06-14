import React,{useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div><h1>Please Login</h1></div>

    return <div>Welcome {user.username} and password is {user.password}</div>
}
export default Profile