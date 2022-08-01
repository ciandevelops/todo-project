import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className={``}>
      <div className="">
        <input type="checkbox" />
        <p className="">{todo}</p>
      </div>
      <button className="">
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
