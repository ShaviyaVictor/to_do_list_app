import React from "react";
import "./App.css";
const App = () => {

  // States

  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  
  // Add the handlesubmit code here

  function handleSubmit(e) {
    
    e.preventDefault()

    const newToDo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newToDo.text.length > 0) {
      setTodos([...todos].concat(newToDo));
      setTodo("");
    } else {
      alert("Enter Valid Task");
      setTodo('');
    }

  }
  
  // Add the deleteToDo code here

  function deleteTodo(id) {

    let updatedTodos = [...todos].filter((todo) =>
    todo.id !== id);
    setTodos(updatedTodos);

  }
  
  // Add the toggleComplete code here

  function toggleComplete(id) {

    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);

  }
  
  // Add the submitEdits code here

  function submitEdits(id) {

    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);

  }

  
return(
  <div className="App">
    
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input 
        type ="text" 
        align ="right" 
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add a new task...'
        value={todo}
      />
      <button type ="submit">Add Todo</button>
    </form>

    {todos.map((todo) => 
      <div className="todo" key={todo.id}>
        <div>{todo.text}</div>
      </div>)}     

    
    <input type="checkbox"
      id="completed"
      className='todo'
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
    /> 

    <button className='todo' onClick={() =>
      deleteTodo(todo.id)}>
        Delete
    </button>


  </div>
);
};
export default App;
