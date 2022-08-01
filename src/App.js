import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Grind Leetcode"]);
  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] ">
      <div className="">
        <h3 className="">Todo App</h3>
        <form className="">
          <input className="" type="text" placeholder="Add Todo" />
          <button className="">
            <AiOutlinePlus size={30} />
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className="">You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
