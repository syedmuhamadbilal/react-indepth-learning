import { useSelector } from "react-redux";
import SingleTodo from "./components/SingleTodo";
const ViewTodos = () => {
  const myTodos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {myTodos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <SingleTodo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ViewTodos;
