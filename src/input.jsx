import {useRef, useState } from "react";
import Show from "./show task";
import "./todo.css"

export default function Addwork(){

    const reff=useRef();
    const [task,addTask]=useState([]);
    const [count,setcount]=useState(1);
    function fillwork(){
       addTask([
        ...task ,{
            id:count,
            title: reff.current.value
        }
       ])
       setcount(count+1);

       reff.current.value=" ";
    }
    return(
        <center>
        <h1 >Todo list</h1>
        <div className="outer" style={{textAlign:"center"}}>
        <h3>Enter Task:</h3>
        <input type="text" ref={reff}/>
        <input type="button" value="Add task" onClick={fillwork}/>
        <hr />
        <Show task={task} addTask={addTask}></Show>
        </div>
        </center>
    )
}

