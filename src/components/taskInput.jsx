import { useState } from "react";

const TaskInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm} className="add__task__form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        placeholder="Add New"
      />
      <button
        type="submit"
        className="btn btn-primary my-3 rounded-pill"
        onClick={() => handleAdd(title)}
      >
        Add new task
      </button>
    </form>
  );
};

export default TaskInput;
