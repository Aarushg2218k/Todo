import { useState } from "react";
import Complete from "./completed"
function Show({task , addTask}){
  
    const [comp,setcomp]=useState([]);
    console.log(comp);
    function deletehandler(id){
        const remaining=task.filter((obj)=> obj.id!==id);
        addTask(remaining);
    }
    function deleteTask(id){
      const afterdel=task.filter((obj)=> obj.id!==id);
      addTask(afterdel)
    }
    return(
    <div className="show">
      <h3>Pending Tasks:</h3>
      {task.map((task)=>{
        return(
        <div key={task.id}>
        <h4><span className="comp">{task.id}: &nbsp;{task.title}</span></h4>
        {/* <input type="button" value="Edit"/> */}
        <input type="button" value="complete" onClick={()=>{setcomp([...comp,task.title]);
        deletehandler(task.id);
        }}/>
        <input type="button" value="Delete" onClick={()=>{deleteTask(task.id)}}/>
        </div>
        )
      })}
      <hr></hr>
      <Complete comparr={comp}></Complete>
    </div>
    )  
}
export default Show;