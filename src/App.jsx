import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const App = () => {

  const [todo, setTodo] = useState([
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
},
{
"userId": 1,
"id": 2,
"title": "quis ut nam facilis et officia qui",
"completed": false
},
{
"userId": 1,
"id": 3,
"title": "fugiat veniam minus",
"completed": false
},
{
"userId": 1,
"id": 4,
"title": "et porro tempora",
"completed": true
}])

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
