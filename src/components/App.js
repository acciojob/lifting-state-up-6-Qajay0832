
import React ,{useState} from "react";
import './../styles/App.css';
import TododList from "./TododList";



const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React App', completed: false },
    { id: 3, text: 'Deploy the React App', completed: false },
  ]);
  
  const handleComplete = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    }));
  };
  
  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TododList todos={todos} handleComplete={handleComplete}/>

    </div>
  )
}

export default App
