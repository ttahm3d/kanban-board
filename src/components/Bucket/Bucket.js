import React from "react";
import { BucketContainer, Task } from "./Bucket.styles";

const Bucket = ({ heading, tasks }) => {
  const handleDragStart = (event, id) => {
    console.log("dragstart:", id);
    event.dataTransfer.setData("id", id);
  };

  const handleDrop = (event) => {
    let id = event.dataTransfer.getData("id");
    const moveableTask = tasks.filter((task) => task.id === id);
    console.log(moveableTask);
    console.log("drop");
  };

  return (
    <BucketContainer
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e)}
    >
      <h2>{heading}</h2>
      {tasks &&
        tasks.map((task) => (
          <Task
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
            id={task.id}
            key={task.id}
          >
            <p>{task.content}</p>
          </Task>
        ))}
    </BucketContainer>
  );
};

export default Bucket;
