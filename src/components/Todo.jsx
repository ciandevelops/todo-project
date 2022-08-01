import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className={`flex justify-between bg-slate-200 p-4 my-2 capitalize`}>
      {/* flex justify-between bg-slate-400 p-4 my-2 capitalize */}
      <div className="flex">
        <input type="checkbox" />
        <p className="ml-2 cursor-pointer">{todo}</p>
        {/* ml-2 cursor-pointer line-through */}
      </div>
      <button className="cursor-pointer flex items-center">
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
