const TasksList = ({tasks, handleDelete, handleCheck}) => {

  if(tasks.length === 0) return <p>You don't have anything to do at this time</p>
  return (
    <ul className="list-group">
      {tasks.map(item => <li key={item.id} className="list-group-item">
        <input type="checkbox" className="form-check-input" id="" onChange={() => handleCheck(item)}/>
        {item.title}
        <button className="btn btn-outline-danger mx-3 rounded-pill" onClick={() => handleDelete(item.id)}>Delete</button>
        </li>)}
    </ul>
  );
}
 
export default TasksList;