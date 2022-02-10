import React from "react";
import axios from "axios";

import editSvg from "../../assets/icons/edit.svg";
import Task from "./Task";
import "./Tasks.scss";
import AddTaskForm from "./AddTaskForm";

const Tasks = ({
  list,
  onEditTitle,
  onAddTask,
  withoutEmpty,
  onRemoveTask,
  onEditTask,
  onCompleteTask,
}) => {
  const editTitle = () => {
    const newTitle = window.prompt("Название списка", list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch("http://localhost:3001/lists/" + list.id, {
          name: newTitle,
        })
        .catch(() => {
          alert("Не удалось обновить название списка");
        });
    }
  };
  console.log(list.color.hex);
  return (
    <div className="tasks">
      <h2 style={{ color: list.color.hex }} className="tasks__title">
        {list.name}
        <img onClick={editTitle} src={editSvg} alt="Edit Title"></img>{" "}
      </h2>

      <div className="tasks__items">
        {!withoutEmpty && list.tasks && list.tasks.length <= 0 && (
          <h2>Задачи отсутствуют</h2>
        )}
        {list.tasks &&
          list.tasks.map((task) => (
            <Task
              key={task.id}
              list={list}
              onComplete={onCompleteTask}
              onRemove={onRemoveTask}
              onEdit={onEditTask}
              {...task}
            ></Task>
          ))}
        <AddTaskForm
          key={list.id}
          list={list}
          onAddTask={onAddTask}
        ></AddTaskForm>
      </div>
    </div>
  );
};

export default Tasks;
