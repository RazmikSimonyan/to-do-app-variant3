import { useEffect, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./Store/Store";
import { ToDo } from "./components/ToDo/ToDo";
import { AddToDo } from "./components/AddToDo/AddToDo";
import { API } from "./API/api";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  const toDoText = (e) =>
    dispatch({ type: "changeText", payload: e.target.value });

  const add = () => dispatch({ type: "add" });

  const deleteToDo = (id) => dispatch({ type: "delete", id });

  const checked = (id) => dispatch({ type: "checked", id });
  const fetchTodos = () => API.getTodos(dispatch);

  return (
    <div className="container">
      <h2
        style={{
          backgroundColor:'red',
          color: 'white',
          textAlign: "center",
          margin: "10px",
          padding:"15px",
          textShadow: "2px 2px 3px gray",
          fontSize: "2rem"
        }}
      >
        Please Insert Your Tasks
      </h2>

      <ToDo
        state={state}
        toDoText={toDoText}
        add={add}
        fetchTodos={fetchTodos}
      />

      <AddToDo deleteToDo={deleteToDo} toDo={state.todos} checked={checked} />
    </div>
  );
}

export default App;
