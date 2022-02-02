import React from "react";
import classNames from "classnames";

import removeSvg from "../../assets/icons/remove.svg";
import "./List.scss";
import { Badge } from "../Badge";
const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm(`Удалить список: ${item.name}?`)) {
      onRemove(item);
    }
  };
  return (
    <ul onClick={onClick} className="list">
      {items.map((obj, i) => (
        <li
          key={i}
          className={classNames(obj.className, { active: obj.active })}
        >
          <i>{obj.icon ? obj.icon : <Badge color={obj.color}></Badge>}</i>
          <span>{obj.name}</span>
          {isRemovable && (
            <img
              onClick={() => removeList(obj)}
              className="list__remove-icon"
              src={removeSvg}
              alt="remove-task"
            ></img>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
