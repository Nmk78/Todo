import React from "react";

const Output = ({ todo, setTodo }) => {
  const handleCheckboxChange = (id, check) => {
    //     console.log('check', check);
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        //   console.log(item.completed)
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  const handleButtonClick = (Child) => {
    if (Child.completed) {
      const updatedTodo = todo.filter((item) => item.id !== Child.id);
      setTodo(updatedTodo);
    }
  };

  return todo.map((Child) => {
    return (
      <div key={Child.id} className="m-3 w-full flex justify-start">
        <label htmlFor={Child.id} className="text-xl cursor-pointer">
          <input
            className="w-4 h-4 rounded-full"
            type="checkbox"
            checked={Child.completed}
            id={Child.id}
            onChange={(e) => {
              handleCheckboxChange(Child.id, e.target.checked);
              //   console.log(e.target.checked)
            }}
          />
          {Child.title}
          <button
            htmlFor={Child.id}
            onClick={(e) => handleButtonClick(Child)}
            className={Child.completed ? "border-rose-500 p-2" : "p-2"}
          >
            {Child.completed ? "Delete" : "Done"}
          </button>
        </label>
      </div>
    );
  });
};

export default Output;
