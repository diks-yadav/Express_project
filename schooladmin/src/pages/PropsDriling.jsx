import React, { createContext, useContext, useState } from "react";

function Component1() {
  return (
    <div>
      <h1>Component 1 </h1>
      <Component2 />
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h1>Component 2 </h1>
      <Component3 />
    </div>
  );
}

function Component3() {
    const user=useContext(userContext);
  return (
    <div>
      <h1>Component 3 {user}</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
    const user=useContext(userContext)
  return (
    <div>
      <h1>Component 4 user from top Component {user}</h1>
    </div>
  );
}

export const userContext = createContext();//user-context 
export default function PropsDriling() {
  const [user, setUser] = useState("Infomatics");
  return (
    <div>
      PropsDriling
      <userContext.Provider value={user}>
        <h1>Component top {user}</h1>
        <Component1 />
      </userContext.Provider>
      {/* <Component1 user={user}/> */}
    </div>
  );
}
