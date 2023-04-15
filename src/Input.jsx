import React, { useState } from "react";

const Input = ({ todo, setTodo }) => {
  const [draft, setDraft] = useState("");

  let submitHandler = ({ todo, setTodo }, e) => {
    console.log(draft);
    setTodo(draft);
    console.log(draft);
    console.log("click");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setDraft(e.target.value);
            console.log(draft);
            console.log(todo);
          }}
          type="text"
          autoComplete="off"
          autoFocus={true}
          value={draft}
          name="Input"
          id="Input"
          placeholder="   Add todo"
          className="w-55 h-10 rounded-l-lg"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            submitHandler()
          }}
          className="w-55 h-11 rounded-l-none "
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
