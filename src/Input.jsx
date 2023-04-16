import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Input = ({ todo, setTodo }) => {
  const [draft, setDraft] = useState("");

  // if(draft = nul){
  //   return draft
  // }

  let submitHandler = (draft, todo, setTodo, e) => {
    // event.preventDefault();
    console.log("draft", draft);
    // if (draft != null) {
    //   return todo 
    // }
      setTodo(
        [
          ...todo,
        {
          id: uuid(),
          title: draft,
          completed: false
        }
        ]
      );
      // return todo
    // }
    console.log(todo);
    console.log("click");
  };

  return (
    <>
      <form
      method="POST"
        onSubmit={(e) => {
          e.target.value = ''
          e.preventDefault();
          submitHandler(draft, todo, setTodo);
        }}
      >
        <input
          onChange={(e) => {
            setDraft(e.target.value);
            // console.log(draft);
            // console.log(todo);
          }}
          type="text"
          autoComplete="off"
          autoFocus={true}
          value={draft}
          name="Input"
          id="Input"
          required
          placeholder="   Add todo"
          className="w-55 h-10 rounded-l-lg"
        />
        <button
          type="submit"
          //     onClick={(e) => {
          //       e.preventDefault();
          //       submitHandler(todo, setTodo , e)
          //     }}
          className="w-55 h-11 rounded-l-none bg-blue-500"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
