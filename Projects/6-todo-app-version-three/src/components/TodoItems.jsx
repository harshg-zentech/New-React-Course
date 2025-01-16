import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ( {todoItems, onDeleteClicked} ) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((todoItem) => (
        <TodoItem key={todoItem?.name} todoName={todoItem?.name} todoDate={todoItem?.dueDate} onDeleteClick={onDeleteClicked}>
        </TodoItem>
      ))}
    </div>
  )
}

export default TodoItems;