import AppName from "./components/appName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodoItem = (todoItemName, todoItemDueDate) => {
    console.log(`New Todo Added: ${todoItemName}, Due Date: ${todoItemDueDate}`);
    const newTodoItems = [...todoItems, { name: todoItemName, dueDate: todoItemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteTodoItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Todo Item Deleted: ${todoItemName}`);
  };

  return <center className="todo-container"> 
    <AppName />

    <AddTodo onNewTodoItem={handleNewTodoItem} />

    {!todoItems.length && <WelcomeMessage todoItems={todoItems}></WelcomeMessage>}

    <TodoItems todoItems={todoItems} onDeleteClicked={handleDeleteTodoItem}></TodoItems>

  </center>
}

export default App
