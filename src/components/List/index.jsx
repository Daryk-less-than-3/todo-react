import React from "react";
import classNames from "classnames";

import "./List.scss";
import { Badge } from "../Badge";
const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((obj, i) => (
        <li
          key={i}
          className={classNames(obj.className, { active: obj.active })}
        >
          <i>{obj.icon ? obj.icon : <Badge color={obj.color}></Badge>}</i>
          <span>{obj.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
