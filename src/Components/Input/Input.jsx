import React, { useContext, useState } from 'react'
import "./input.css"
import { store } from '../../context'

const Input = () => {
    const {list,setList,setBoolean} = useContext(store);
    const [inputData,setInputData] = useState("");
    function settingLocalStorage(list){
        localStorage.setItem("todoData",JSON.stringify(list));
    }
  return (
    <div className='inputContainer'>
        <div className='inputInnerContainer'>
        <input onChange={(e) => {
            setInputData(e.target.value)
        }} type="text" placeholder='add todo ...' />
        <button onClick={() => {
            if(inputData === ""){
                alert("Enter Some Work ToDo 😎 !!!!");
                return
            }
            setList([...list,{todo:inputData,id:Date.now(),booleanValue:false,checked:false}]);
            settingLocalStorage(list)
        }}><i className="fa-solid fa-circle-plus"></i></button>
        </div>
    </div>
  )
}

export default Input