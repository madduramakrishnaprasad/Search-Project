import {useState} from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {

    if(task.trim()) {
      setTasks([...tasks,{id:Date.now(), text: task}]);
      setTask("");
    }

  };

  return (
  <div>
<input value={task} onChange = {(e)=> setTask(e.target.value)}/>
<button onClick = {addTask}>New One</button>
<ul>
  {tasks.map((t)=>(
    <li key={t.id}> {t.text}</li>
  ))}
</ul>
  </div>
  );

}

export default TodoApp;