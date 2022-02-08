import axios from "axios";
import React from "react";

import addSvg from "../../assets/icons/add.svg";
const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleForm, setVisibleForm] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const toogleFormVisible = () => {
    setVisibleForm(!visibleForm);
    setInputValue("");
  };

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false,
    };
    setIsLoading(true);

    axios
      .post("http://localhost:3001/tasks", obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toogleFormVisible();
      })
      .catch(() => {
        alert("Ошибка при добавлении задачи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div onClick={toogleFormVisible} className="tasks__form-new">
          <img src={addSvg} alt="add-Task" />
          <span>New Task</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input
            value={inputValue}
            className="field"
            type="text"
            placeholder="Текст Задачи"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button disabled={isLoading} onClick={addTask} className={"button"}>
            {isLoading ? "Добавляем" : "Добавить задачу"}
          </button>
          <button onClick={toogleFormVisible} className={"button button--grey"}>
            Отмена
          </button>
        </div>
      )}
    </div>
  );
};
export default AddTaskForm;
