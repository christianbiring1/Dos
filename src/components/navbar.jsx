const NavBar = ({ tasks }) => {
  const left = tasks.filter((item) => item.completed === false).length;
  return (
    <div className="navbar">
      <div className="nav__left">
        <span>+Add</span>
        <span>Search</span>
        <span>{left} items left</span>
      </div>
      <div className="nav__right">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default NavBar;
