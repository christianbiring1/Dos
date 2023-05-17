const NavBar = ({ tasks, onCompleted, onActive, onAll }) => {
  const left = tasks.filter((item) => !item.completed).length;
  return (
    <div className="navbar">
      <div className="nav__left">
        <span>
          <i className="fa fa-plus"></i>Add
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
