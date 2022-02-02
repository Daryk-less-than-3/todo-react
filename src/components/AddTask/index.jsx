import React from "react";
import { Badge } from "../Badge";
import List from "../List";

import closeSvg from "../../assets/icons/remove.svg";
import "./AddTask.scss";

const AddTask = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [selectedColor, selectColor] = React.useState(null);
  return (
    <div className="add-task">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-task",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="#B4B4B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="#B4B4B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить задачу",
          },
        ]}
      ></List>

      {visiblePopup && (
        <div className="add-task__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close-button"
            className="add-list__popup-close-btn"
          />
          <input className="field" type="text" placeholder="set task name" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Добавить </button>
        </div>
      )}
    </div>
  );
};
export default AddTask;
