import { useEffect, useState } from "react";

function Todo() {
  const [task, setTask] = useState(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    if (data) {
      return data;
    } else {
      return [];
    }
  });
  const [inp, setInp] = useState("");

  const settingTask = (e) => {
    e.preventDefault();

    if (!inp) {
      return;
    }

    setTask([...task, { id: task.length, inp: inp }]);

    setInp("");
  };
  const setInput = (e) => {
    setInp(e.target.value);
  };

  const itemDelete = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <form
        onSubmit={settingTask}
        className="flex gap-2
       max-w-2xl my-5 mx-auto px-5"
      >
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add Task..."
          required
          value={inp}
          onChange={setInput}
        />
        <button className="bg-green-700 text-white text-sm rounded-lg px-5">
          Add
        </button>
      </form>
      <div className="taskList">
        <ul className="flex flex-col gap-3.5 w-full sm:max-w-2xl m-auto px-5">
          {task.map((item) => (
            <li
              key={item.id}
              className="flex justify-between w-full bg-gray-100 p-3 rounded-md text-ellipsis overflow-hidden text-nowrap	"
            >
              {item.inp}
              <button
                onClick={() => itemDelete(item.id)}
                className="bg-red-700 text-white px-5 rounded-lg"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
0;
export default Todo;
