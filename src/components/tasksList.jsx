import TaskItem from "./taskItem";
const TasksList = ({ tasks, handleDelete, handleCheck }) => {
  if (tasks.length === 0)
    return (
      <p className="nothing_to">You don't have anything to do at this time</p>
    );

  return (
    <ul className="list-group">
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TasksList;
