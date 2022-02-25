const Task = ({ taskInfo, deleteTask }) => {
  return (
    <div className="task_container">
      <p>{taskInfo}</p>

      <button
        className="task_container_button"
        onClick={() => {
          deleteTask(taskInfo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
