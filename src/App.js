import { useState } from "react";
import { TaskItem } from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React"
    },
    {
      isCompleted: true,
      name: "Learn Hooks"
    },
    {
      isCompleted: false,
      name: "Deploy App"
    }
  ]);
  
  const [textValue, setTextValue] = useState("");
  
  const handleTaskChange = (index) => () => {
    console.log("changed:" + index);
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(textValue !== ""){
      const newTask = {
        isCompleted:false,
        name:textValue
      };
      const arr = [...tasks];
      arr.push(newTask);
      setTasks(arr);
    }
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };

  const handleTaskDelete = (index) => () => {
    console.log("deleted:"+index);
    const arr = [...tasks];
    arr.splice(index,1);
    setTasks(arr);
  };
  return (
    <main className="App-main">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task name" value={textValue} onChange={handleTextChange}/>
        <button>Create Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
              onDelete={handleTaskDelete(index)}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
