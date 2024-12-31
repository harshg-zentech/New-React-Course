import AppName from "./components/appName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "04/10/2023" },
    { name: "Go to college", dueDate: "04/10/2023" },
    { name: "Enjoy", dueDate: "right now" }
  ]

  return <center className="todo-container"> 
    <AppName />

    <AddTodo />

    <TodoItems todoItems={todoItems}></TodoItems>

  </center>
}

export default App
