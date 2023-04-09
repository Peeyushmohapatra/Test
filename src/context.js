import { createContext, useState } from "react";

export const store = createContext();

function CustumHook({ children }) {
    const [list,setList] = useState([]);
    const [boolean,setBoolean] = useState(false);
    const [inputValue, setinputValue] = useState("");

    console.log(list,"Hello");
    
  return (
  <store.Provider value={{list,setList,boolean,setBoolean,inputValue, setinputValue}}>
    {children}
  </store.Provider>
    );
};




export default CustumHook;
