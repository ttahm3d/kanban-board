import Bucket from "./components/Bucket/Bucket";
import "./App.css";

function App() {
  const tasks = [
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
    {
      id: "3",
      content: "Third Task",
      bucket: "todo",
    },
    {
      id: "4",
      content: "Fourth Task",
      bucket: "todo",
    },
    {
      id: "5",
      content: "Fifth Task",
      bucket: "todo",
    },
  ];

  const Buckets = {
    todo: {
      name: "To Do",
      tasksList: tasks,
    },
    inProgress: {
      name: "In Progress",
      tasksList: [],
    },
    completed: {
      name: "Complated",
      tasksList: [],
    },
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="buckets">
        {Object.keys(Buckets).map((bucketName) => (
          <Bucket
            heading={Buckets[bucketName].name}
            tasks={Buckets[bucketName].tasksList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
