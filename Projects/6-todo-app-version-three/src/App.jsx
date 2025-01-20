import AppName from "./components/appName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodoItem = (todoItemName, todoItemDueDate) => {
    const newTodoItems = [...todoItems, { name: todoItemName, dueDate: todoItemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteTodoItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return <center className="todo-container"> 
    <AppName />

    <AddTodo onNewTodoItem={handleNewTodoItem} />

    {!todoItems.length && <WelcomeMessage todoItems={todoItems}></WelcomeMessage>}

    <TodoItems todoItems={todoItems} onDeleteClicked={handleDeleteTodoItem}></TodoItems>

  </center>
}

export default App
