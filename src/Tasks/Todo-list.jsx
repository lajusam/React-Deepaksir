 import React,  { useState } from "react";
import "./todo.css"
 const Todolist=()=>{
        const [task,settask]=useState("")
        const [tasks,settasks]=useState([])

    function addbutton(){
        if(task.trim()==="")return;
        settasks([...tasks,task])
        settask("")
    }
    function deletebutton(index){
       settasks(tasks.filter((_,i)=>i !== index)) 
    }
    return(
        <>
        <div className="List-container">
            <h1>To-do-list</h1>
            <div className="todoinputsection">
                <input type="text" value={task} placeholder="Enter the task" onChange={(e)=>settask(e.target.value)}/>
                <button onClick={addbutton}>Add-task</button>
            </div>
            <div className="Display-section">
                <ul>
                    {tasks.map((task,index)=>{
                        return(
                            <li key={index}>
                            {task}
                            <button onClick={()=>deletebutton(index)}>Delete</button>
                        </li>
                        )
                        
                    })}
                </ul>

            </div>
        </div>
        </>
    )
 }
 export default Todolist;