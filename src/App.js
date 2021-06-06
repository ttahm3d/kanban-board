import { useState, useEffect } from "react";
import { BucketContainer, TaskContainer } from "./Bucket.styles";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: "First Task",
      bucket: "todo",
    },
    {
      id: "2",
      content: "Second Task",
      bucket: "todo",
    },
  ]);

  useEffect(() => {}, [tasks]);

  const Buckets = {
    todo: {
      name: "To Do",
      tasksList: tasks.filter((task) => task.bucket === "todo") || [],
    },
    inProgress: {
      name: "In Progress",
      tasksList: tasks.filter((task) => task.bucket === "inProgress") || [],
    },
    completed: {
      name: "Completed",
      tasksList: tasks.filter((task) => task.bucket === "completed") || [],
    },
  };

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDrop = (event, bucketName, tasksList) => {
    let id = event.dataTransfer.getData("id");

    const singleTask = tasks.filter((task) => {
      if (task.id === id) {
        task.bucket = bucketName;
      }
      return task;
    });

    setTasks([...singleTask, tasks]);
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="buckets">
        {Object.keys(Buckets).map((bucketName) => (
          <BucketContainer
            key={bucketName}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, bucketName, Buckets[bucketName].tasksList)}
          >
            <h2>{Buckets[bucketName].name}</h2>
            {Buckets[bucketName].tasksList.map((task) => (
              <TaskContainer
                draggable
                key={task.id}
                onDragStart={(e) => onDragStart(e, task.id)}
              >
                <p>{task.content}</p>
              </TaskContainer>
            ))}
          </BucketContainer>
        ))}
      </div>
    </div>
  );
}

export default App;
