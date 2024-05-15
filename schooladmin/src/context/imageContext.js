import { useState,Children,createContext } from "react";

export const imageContext=createContext({Children});

export default function ImageContext(){
    const [imageValue,setImageValue]=useState("");
    return(
        <imageContext.Provider value={imageValue}>
            {Children}
        </imageContext.Provider>
    )
}