import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ( {todoItems} ) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((todoItem) => (
        <TodoItem key={todoItem?.name} todoName={todoItem?.name} todoDate={todoItem?.dueDate}>
        </TodoItem>
      ))}
    </div>
  )
}

export default TodoItems;