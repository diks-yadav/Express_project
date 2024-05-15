import React,{ useState,createContext } from "react";
import App from "../App";
 const imageContext=createContext(null);
 export {imageContext}
 function ImageContext({children}){
    const [imageValue,setImageValue]=useState("");
    const contextData={
        imageValue,setImageValue
    }
    return(
        <imageContext.Provider value={contextData}>
            <App/>  
        </imageContext.Provider>
    )
}
export default ImageContext