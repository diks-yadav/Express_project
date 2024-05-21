import { useNavigate } from "react-router-dom";

export function handleLogout(){
    // const navigate=useNavigate();
    console.log("handleLogouit function called");
   localStorage.removeItem("email");
//    navigate("/");
}