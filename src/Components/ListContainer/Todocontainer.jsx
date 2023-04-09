import React, { useContext, useState } from "react";
import "./todocontainer.css";
import { store } from "../../context";

const Todocontainer = () => {
  const { list, setList,inputValue, setinputValue} = useContext(store);
  const [re_render, setRe_render] = useState(false);
  const [checked,setChecked] = useState(false);

  function deleteTodo(id, list) {
    setList(
      list.filter((ele) => {
        return ele.id !== id;
      })
    );
  }

  return (
    <div className="todoContainer">
      {list.length > 0 ? list.map((ele) => {
        return (
          <div className="lists">
            <input onChange={(e) => {
                if(e.target.checked){
                    ele.checked = true
                setChecked(e.target.checked)
                }else{
                    ele.checked = false
                    setChecked(e.target.checked)
                }
                console.log(e.target.checked);
            }} type="checkbox" />

            {ele.booleanValue ? (
              <input className="inputContainer2"
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setinputValue(e.target.value); 
                }}
              />
            ) : (
              <p className={ele.checked === true ? "checkedClass" : "pTag"} >{ele.todo}</p>
            )}

            <div className="iconContainer">

              <i style={{cursor:"pointer",color:"darkgreen"}}
                onClick={() => {
                  ele.booleanValue = !re_render;
                  setinputValue(ele.todo);
                  ele.todo = inputValue;
                  setRe_render(!re_render);
                }}
                className="fa-solid fa-pen-to-square"
              ></i>

              <i style={{cursor:"pointer",color:"red"}}
                onClick={() => {
                  deleteTodo(ele.id, list);
                }}
                className="fa-solid fa-trash"
              ></i>

            </div>
          </div>
        );
      }) : <h1 style={{color:"white"}}>Add You Works</h1>}
    </div>
  );
};

export default Todocontainer;
