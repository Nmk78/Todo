import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const App = () => {

  const [todo, setTodo] = useState([

])

  return (
    
    <>
    {/* {console.log(todo)} */}
      <h1 className="text-3xl font-bold underline italic">Todo</h1>
      <Input todo={todo} setTodo={setTodo} />
      <Output todo={todo} setTodo={setTodo} />
      
    </>
  );
};

export default App;
