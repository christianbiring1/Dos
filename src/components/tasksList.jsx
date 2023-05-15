const TasksList = ({tasks, handleDelete, handleCheck}) => {

  if(tasks.length === 0) return <p className="nothing_to">You don't have anything to do at this time</p>

  const styles = (item) => {
    let style = "task__title"
    if(item.completed) {
      style += ' text-decoration-line-through opacity-75'
    }
    return style;
  }
  return (
    <ul className="list-group">
      {tasks.map(item => <li key={item.id} className="list-group-item">
        <input type="checkbox" className="form-check-input" id="" onChange={() => handleCheck(item)}/>
          <span className={styles(item)}>
            {item.title}
          </span>
          <button className="btn btn-outline-danger mx-3 rounded-pill" onClick={() => handleDelete(item.id)}>Delete</button>
        </li>)}
    </ul>
  );
}
 
export default TasksList;