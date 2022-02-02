import React from "react";
import "./Tasks.scss";
import editSvg from "../../assets/icons/edit.svg";

const Tasks = () => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        FrontEnd <img src={editSvg} alt="Edit Title"></img>{" "}
      </h2>

      <div className="tasks__items">
        <div className="tasks__items-row">
          <div className="checkbox">
            <input id="check" type="checkbox"></input>
            <label htmlFor="check">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#b2b2b2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <input value={"got some exp"} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
