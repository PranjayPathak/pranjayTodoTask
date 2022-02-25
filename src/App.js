import { useState } from "react";
import Task from "./component/Task";
import "./App.scss";

let demo_tasks = ["demo task 1", "demo task 2", "demo task 3", "demo task 4"];

const App = () => {
  const [tasks, setTasks] = useState(demo_tasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskDetail) => {
    let newTasks = tasks.filter((task) => {
      //filtering task that matches the description
      return task !== taskDetail;
    });
    setTasks(newTasks);
  };

  return (
    <div className="todo_container">
      <h1>Demo Todo</h1>
      <form
        className="todo_container_form"
        onSubmit={(e) => {
          e.preventDefault(); // to prevent rerender on form submission
          addTask();
        }}
      >
        <input
          className="todo_container_form_input"
          //so that element is controlled and stable
          value={newTask}
          placeholder="Please add new task"
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          required={true}
          type="text"
        ></input>

        <button className="todo_container_form_button" type="submit">
          {" "}
          Add +{" "}
        </button>
      </form>
      <div className="todo_container_tasks">
        {tasks.map((el, idx) => {
          // for keys index is not preffered, but for now using it
          return (
            <Task
              key={idx + "random text"}
              taskInfo={el}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
