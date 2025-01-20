import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiCommentAdd } from "react-icons/bi";

function AddTodo({onNewTodoItem}) {
  const todoNameElementRef = useRef("");
  const todoDueDateElementRef = useRef("");

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElementRef.current.value;
    const todoDueDate = todoDueDateElementRef.current.value;
    todoNameElementRef.current.value = "";
    todoDueDateElementRef.current.value = "";
    onNewTodoItem(todoName, todoDueDate);
  };

  return (
    <div className="container">
      <form className="row hg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input className={styles?.hgInput} type="text" placeholder="Enter To Do here" ref={todoNameElementRef} />
        </div>
        <div className="col-4">
          <input className={styles?.hgInput} type="date" ref={todoDueDateElementRef} />
        </div>
        <div className="col-2 text-end">
          <button type="submit" className="btn btn-success hg-button">
            <BiCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;