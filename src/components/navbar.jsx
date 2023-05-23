import { useEffect, useRef, useState } from "react";

const NavBar = ({ tasks, handleAdd, onCompleted, onActive, onAll }) => {
  const left = tasks.filter((item) => !item.completed).length;
  const [dropdown, setDropDown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown]);
  return (
    <div className="navbar">
      <div className="nav__left">
        <span
          ref={ref}
          onClick={() => setDropDown((prev) => !prev)}
          className="add_task-container"
        >
          <i className="fa fa-plus"></i>Add
          {dropdown && (
            <div className="add_task">
              <input type="text" placeholder="Add New" />
            </div>
          )}
        </span>
        <span>
          <i className="fa fa-search"></i>Search
        </span>
        <span>{left} items left</span>
      </div>
      <div className="nav__right">
        <span onClick={() => onAll()}>All</span>
        <span onClick={() => onActive()}>
          <i
            style={{ color: "green" }}
            className="fa fa-check-circle"
            aria-hidden="true"
          ></i>
          Active
        </span>
        <span onClick={() => onCompleted()}>
          <i className="fa fa-list"></i>Completed
        </span>
      </div>
    </div>
  );
};

export default NavBar;
