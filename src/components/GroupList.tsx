import { useState } from "react";
function GroupList() {
  let cities = ["Tokyo", "Delhi", "London", "Paris"];
  let tasks = ["Code", "Sleep"];
  let heading = "Cities";
  let [SelectedValue, setSelectedValue] = useState(0);
  let [ItemState, setItemState] = useState("no");

  function handleCompleteTask() {
    setItemState(ItemState === "yes" ? "no" : "yes");
  }
  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && "No cities found!"}
      <ul className="list-group">
        {cities.map((city, indexValue) => (
          <li
            className={
              indexValue === SelectedValue
                ? "list-group-item active "
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedValue(indexValue);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
      <br />
      <h1>{"To-do"}</h1>
      {tasks.length === 0 && "No tasks found!"}
      <ul className="list-group">
        {tasks.map((task) => (
          <li className="list-group-item">
            {/* <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id={task}
            /> */}
            <li
              className={
                ItemState === "yes"
                  ? "form-check-label item-striked"
                  : "form-check-label"
              }
              onClick={handleCompleteTask}
            >
              {task}
            </li>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GroupList;
