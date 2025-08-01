import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../../store/slices/todoSlice";
const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("false");
  const [id, setId] = useState(0);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, text: input }));
    setIsEdit(false);
  };
  return (
    <>
      {isEdit ? (
        <form onSubmit={updateHandler} className="space-x-3">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      ) : (
        <>
          <div className="text-white">{todo.text}</div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setId(todo?.id);
                setInput(todo?.text);
                setIsEdit(true);
              }}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SingleTodo;
