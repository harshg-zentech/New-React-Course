import { useState } from "react";
import styles from "./AddTodo.module.css";
import { BiCommentAdd } from "react-icons/bi";

function AddTodo({onNewTodoItem}) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDueDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    onNewTodoItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };

  return (
    <div className="container">
      <form className="row hg-row">
        <div className="col-6">
          <input className={styles?.hgInput} type="text" placeholder="Enter To Do here" value={todoName} onChange={handleTodoNameChange} />
        </div>
        <div className="col-4">
          <input className={styles?.hgInput} type="date" value={todoDueDate} onChange={handleTodoDueDateChange} />
        </div>
        <div className="col-2 text-end">
          <button type="submit" className="btn btn-success hg-button" onSubmit={handleAddButtonClick}>
            <BiCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;